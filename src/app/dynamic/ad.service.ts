import { Injectable } from '@angular/core';
import {AdItem} from "./ad-item";
import {HeroProfileComponent} from "./hero-profile/hero-profile.component";
import {HeroJobAdComponent} from "./hero-job-ad/hero-job-ad.component";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds(){
    return [
      new AdItem('HeroProfileComponent', HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem('HeroProfileComponent', HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem('HeroJobAdComponent', HeroJobAdComponent,   {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),

      new AdItem('HeroJobAdComponent', HeroJobAdComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'})
    ];
  }
}
