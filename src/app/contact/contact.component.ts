import { Component, Input } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements CarouselComponent {
  @Input() data: any;
}
