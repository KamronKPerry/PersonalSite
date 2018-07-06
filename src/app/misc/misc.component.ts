import { Component, Input } from '@angular/core';
// import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent {
  @Input() data: any;

}
