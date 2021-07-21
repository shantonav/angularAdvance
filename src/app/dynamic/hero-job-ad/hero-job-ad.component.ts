import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() modifiedData = new EventEmitter<ViewData>();

  heroJobForm = this.fb.group( {
    currentViewName: [''],
    data: [''],
    nextViewName: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.heroJobForm.patchValue({
      currentViewName: this.viewData.viewName,
      data: this.viewData.data,
      nextViewName: this.viewData.nextViewName
    });

    this.heroJobForm.valueChanges.subscribe( selectedValue => {
      console.log( 'form value changed ' + selectedValue);
      this.modifiedData.emit( new ViewData( this.viewData.viewName!, this.viewData.data, this.viewData.nextViewName! ) );
    });
  }


}
