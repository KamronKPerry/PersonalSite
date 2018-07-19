import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
// import { CarouselService } from './carousel/carousel.service';
// import { CarouselItem } from './carousel/carousel-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Kamron Perry';
  innerWidth: number;
  innerHeight: number;

  // carousels: CarouselItem[];
  constructor() {
  // tslint:disable:prefer-const
  let getWindowWidth = () => {
    return window.innerWidth;
  };
  let getWindowHeight = () => {
    return window.innerHeight;
  };
  window.onresize = () => {
    let carousel = document.getElementsByClassName('carousel') as HTMLCollectionOf<HTMLElement>;
    if (carousel.length !== 0) {
      carousel[0].style.height = getWindowHeight().toString();
      carousel[0].style.width = getWindowWidth().toString();
    }
  };
  }
  ngOnInit() {
  }
}
