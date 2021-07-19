import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from "../ad-component";
import {ViewData} from "../ad-banner/view-data";

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit, AdComponent {

  @Input() data: any

  @Input() viewData: Partial<ViewData> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
