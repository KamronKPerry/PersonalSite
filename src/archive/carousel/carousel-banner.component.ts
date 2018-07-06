// import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

// import { CarouselDirective } from './carousel.directive';
// import { CarouselItem } from './carousel-item';
// import { CarouselComponent } from './carousel.component';

// @Component({
//     selector: 'app-carousel-banner',
//     template: `
//                 <div class="carousel-banner">
//                 <ng-template carousel-host></ng-template>
//                 </div>
//                 `
// })
// export class CarouselBannerComponent implements OnInit, OnDestroy {
//     @Input()  carousels: CarouselItem[];
//     currentCarouselIndex = -1;
//     @ViewChild(CarouselDirective) carouselHost: CarouselDirective;
//     interval: any;
//     constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

//     ngOnInit() {
//         this.loadComponent();
//         this.getCarousel();
//     }
//     ngOnDestroy() {
//         clearInterval(this.interval);
//     }
//     loadComponent() {
//         this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.carousels.length;
//         // tslint:disable:prefer-const
//         let carouselItem = this.carousels[this.currentCarouselIndex];

//         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(carouselItem.component);

//         let viewContainerRef = this.carouselHost.viewContainerRef;
//         viewContainerRef.clear();
//         let componentRef = viewContainerRef.createComponent(componentFactory);
//         (<CarouselComponent>componentRef.instance).data = carouselItem.data;
//     }
//     getCarousel() {
//         this.interval = setInterval(() => {
//             this.loadComponent();
//         }, 3000);
//     }
// }
