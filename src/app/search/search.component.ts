import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Observable }        from 'rxjs/Rx';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from "../search.service";




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  search = new FormControl();
  cities: Observable<string[]>;
  city:string;
  selectFlag: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    /*this.cities = this.searchTerms.distinctUntilChanged().switchMap(city => city?this.searchService.searchCity(city)
    :Observable.of([])
    );*/
    this.city = '';
    this.cities = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.searchService.searchCity(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }
  setValue(cityValue:string){
    this.searchTerms.next(cityValue);
    this.selectFlag = false;
  }
  setCity(city){
    this.city = city;
    this.selectFlag = true;
  }
}
