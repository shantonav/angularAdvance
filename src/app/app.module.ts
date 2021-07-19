import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { HelloServiceService } from "./hello-service.service";
import { AdDirective } from './dynamic/ad.directive';
import { AdBannerComponent } from './dynamic/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './dynamic/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic/hero-profile/hero-profile.component';
import {AdService} from "./dynamic/ad.service";
import { AdAppComponent } from './dynamic/ad-app/ad-app.component';
import {ViewDeterminationService} from "./dynamic/ad-banner/view-determination.service";

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HelloServiceService, AdService, ViewDeterminationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
