import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from "../ad-component";
import {ViewData} from "../ad-banner/view-data";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss']
})
export class HeroJobAdComponent implements OnInit, AdComponent {
  @Input() data: any;

  @Input() viewData: Partial<ViewData> = {};

  heroJobForm = this.fb.group( {
    currentViewName: [''],
    data: [''],
    nextViewName: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   /* this.heroJobForm.patchValue({
      currentViewName: this.viewData.viewName,
      data: this.viewData.data,
      nextViewName: this.viewData.nextViewName
    })*/
  }

}
