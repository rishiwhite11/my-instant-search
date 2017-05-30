import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.addEventListener("click", function(){
      el.nativeElement.style.display = "none";
    })
  }
  

}
