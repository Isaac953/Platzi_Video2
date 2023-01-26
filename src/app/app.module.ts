import { NgModule, Injectable } from '@angular/core';
import * as Hammer from 'hammerjs';
import {
  BrowserModule,
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DropdownComponent } from './components/header/dropdown/dropdown.component';
import { BrowserComponent } from './components/main/home/browser/browser.component';
import { CarouselComponent } from './components/main/home/carousel/carousel.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DropdownComponent,
    routingComponents,
    BrowserComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HammerModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
