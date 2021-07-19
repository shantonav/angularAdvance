import { Component, OnInit } from '@angular/core';
import {AdItem} from "../ad-item";
import {AdService} from "../ad.service";

@Component({
  selector: 'app-ad-app',
  templateUrl: './ad-app.component.html',
  styleUrls: ['./ad-app.component.scss']
})
export class AdAppComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
