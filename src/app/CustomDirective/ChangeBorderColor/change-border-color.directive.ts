import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColor]'
})
export class ChangeBorderColorDirective {

  constructor(private _ElementRef:ElementRef) { }

  @HostListener('click') onClick(){

    //Here I want to chnage the border color when object.price is greater
    this._ElementRef.nativeElement.style.borderColor = 'yellow'; 
  }
}






// directive is a good solution for this kind of thing and can be configurable like color for example and can be reusable on other component mean outside this component and you don't need to add extra logic inside current component.

// import { Directive, HostBinding, Input,HostListener} from '@angular/core';
// import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

// @Directive({
//   selector: '[clickColor]'
// })
// export class ClickColorDirective {

//   private toggle: boolean = false;
//   @Input() color: string = 'red';

//   constructor(private doms: DomSanitizer) { }

//   @HostBinding('style') get myStyle(): SafeStyle {
//     let style : string = this.toggle ? `background: ${this.color}` : '';
//     return this.doms.bypassSecurityTrustStyle(style);
//   }

//   @HostListener('click') onClick() {
//     this.toggle = !this.toggle;
//   } 

// }
// template

// <div clickColor>
//   Hello World from Angular
// </div>

// <div clickColor color='blue'>
//    Angular  World
// </div>

// <div clickColor [color]="'#000'">
//  Batman !!!
// </div>
// https://stackoverflow.com/questions/51719858/how-to-change-div-background-color-on-click-in-angular-6/51719974