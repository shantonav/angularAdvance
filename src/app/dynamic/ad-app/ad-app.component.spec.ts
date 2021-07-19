import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAppComponent } from './ad-app.component';

describe('AdAppComponent', () => {
  let component: AdAppComponent;
  let fixture: ComponentFixture<AdAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
