import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdComponent} from "../ad-component";
import {ViewData} from "../ad-banner/view-data";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit, AdComponent {

  @Input() data: any

  @Input() viewData: Partial<ViewData> = {};

  @Output() modifiedData = new EventEmitter<ViewData>();

  heroProfileForm = this.fb.group( {
    currentViewName: [''],
    data: [''],
    nextViewName: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.heroProfileForm.patchValue({
      currentViewName: this.viewData.viewName,
      data: this.viewData.data,
      nextViewName: this.viewData.nextViewName
    });

    this.heroProfileForm.valueChanges.subscribe( selectedValue => {
      console.log( 'form value changed ' + selectedValue);
      this.modifiedData.emit( new ViewData( this.viewData.viewName!, this.viewData.data, this.viewData.nextViewName! ) );
    });
  }


}
