// import { Component, AfterViewInit, ContentChildren, QueryList, ViewChildren, ElementRef, ViewChild, Input } from '@angular/core';
// import { CarouselItemDirective } from './carousel.directive';
// import { CarouselItemElement } from './carousel-item.directive';
// import { AnimationPlayer, AnimationBuilder, AnimationFactory, animate, style } from '@angular/animations';

// @Component({
//   tslint:disable-next-line:component-selector
//   selector: 'carousel',
//   template: `
//   <section class= "carousel-wrapper" [ngStyle]="carouselWrapperStyle">
//     <ul class="carousel-inner" #carousel>
//       <li *ngFor="let item of items;" class="carousel-item">
//         <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
//       </li>
//       </ul>
//       </section>

//       <div *ngIf="showControls">
//         <button (click)="next()">Next</button>
//         <button (click)="prev()">Previous</button>
//         <div>
// `,
//   styles: [`

//       .carousel-wrapper {
//         overflow: hidden;
//       }

//       .carousel {
//         list-style: none;
//         margin: 0;
//          padding: 0;
//          width: 600px;
//       }

//       .carousel-inner {
//         display: flex;
//       }
//       `]
// })
// export class CarouselComponent implements AfterViewInit {
//   @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;

//   @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemElements: QueryList<ElementRef>;
//   @ViewChild('carousel') private carousel: ElementRef;
//   @Input() timing = '250ms ease-in';
//   @Input() showControls = true;
//   private player: AnimationPlayer;
//   private itemWidth: number;
//   private currentSlide = 0;
//   ngAfterViewInit() {
//     this.itemWidth =
// this.itemsElements.first.nativeElement.getBoundingClientRect().width;
//     this.carouselWrapperStyle = {
//       width: `${this.itemWidth}px`
//     }
//   }
// constructor( private builder : AnimationBuilder ) {
// }
// next() {
//   if( this.currentSlide + 1 === this.items.lenth ) { return; }
//   this.currentSlide = (this.currentSlide + 1) % this.items.length;
//   const offset = this.currentSlide * this.itemWidth;
//   const myAnimaton : AnimationFactory = this.builder.build([
//     animate(this.timing, style({ transform: `translateX(-${offset}px`}))
//   ]);
//   this.player = myAnimaton.create(this.carousel.nativeElement);
//   this.player.play();
// }
// }
