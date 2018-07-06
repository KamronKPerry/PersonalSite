import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MiscComponent } from './misc/misc.component';
import { UpdatesComponent } from './updates/updates.component';
import { ClassmatesComponent } from './classmates/classmates.component';
import { LipsumComponent } from './lipsum/lipsum.component';
// import { CarouselBannerComponent } from './carousel/carousel-banner.component';
// import { CarouselDirective } from './carousel/carousel.directive';
// import { CarouselService } from './carousel/carousel.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule
  ],
  // providers: [CarouselService],
  declarations: [ AppComponent,
                  // CarouselBannerComponent,
                  LandingComponent,
                  PortfolioComponent,
                  ContactComponent,
                  MiscComponent,
                  UpdatesComponent,
                  ClassmatesComponent,
                  LipsumComponent,
                  // CarouselDirective
                ],
  entryComponents: [  LandingComponent,
                      PortfolioComponent,
                      ContactComponent,
                      MiscComponent,
                      UpdatesComponent,
                      ClassmatesComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
