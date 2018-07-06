import { Component, Input } from '@angular/core';
// import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  @Input() data: any;

}
