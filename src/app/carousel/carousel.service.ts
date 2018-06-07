import { Injectable } from '@angular/core';

import { CarouselItem } from './carousel-item';
import { LandingComponent } from '../landing/landing.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { MiscComponent } from '../misc/misc.component';
import { UpdatesComponent } from '../updates/updates.component';
import { ClassmatesComponent } from '../classmates/classmates.component';

@Injectable()
export class CarouselService {
    getCarousels() {
        return [
            new CarouselItem(LandingComponent, {}),
            new CarouselItem(PortfolioComponent, {}),
            new CarouselItem(ContactComponent, {}),
            new CarouselItem(MiscComponent, {}),
            new CarouselItem(UpdatesComponent, {}),
            new CarouselItem(ClassmatesComponent, {})
        ];
    }
}
