import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from "../ad-component";
import {ViewData} from "../ad-banner/view-data";

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss']
})
export class HeroJobAdComponent implements OnInit, AdComponent {
  @Input() data: any;

  @Input() viewData: Partial<ViewData> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
