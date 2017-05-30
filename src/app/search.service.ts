import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  url = "http://localhost:3000/cities";
  constructor(private http: Http) { }

  searchCity(city:string):any{
    //console.log("Hello");
    let citySearchParams = new URLSearchParams();
    citySearchParams.set('q', city);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    options.search = citySearchParams;
    return this.http.get(this.url, options).map((response: Response) => response.json())
  }

}
