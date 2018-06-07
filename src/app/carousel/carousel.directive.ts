import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[carousel-host]',
})
export class CarouselDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
