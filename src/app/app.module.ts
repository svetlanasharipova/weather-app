import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HoteltypePipe } from './common/pipes/hoteltype.pipe';
import { PhonenumberPipe } from './common/pipes/phonenumber.pipe';
import { WeatherComponent } from './components/weather/weather.component';
import { SocialComponent } from './components/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HoteltypePipe,
    PhonenumberPipe,
    WeatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
