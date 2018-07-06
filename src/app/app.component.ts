import { Component, OnInit } from '@angular/core';
// import { CarouselService } from './carousel/carousel.service';
// import { CarouselItem } from './carousel/carousel-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Kamron Perry';
  // carousels: CarouselItem[];
  constructor() {
  }
  ngOnInit() {
  }
}
