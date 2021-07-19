import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {AdDirective} from "../ad.directive";
import {AdComponent} from "../ad-component";
import {AdItem} from "../ad-item";
import {ViewRequest} from "./view-request";
import {ViewData} from "./view-data";
import {ViewDeterminationService} from "./view-determination.service";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[] = [];
  currentAdIndex = -1;
  @ViewChild( AdDirective, { static: true })  adHost!: AdDirective;
  interval: any;
  viewData: Partial<ViewData> = {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewService: ViewDeterminationService) { }

  ngOnInit(): void {
    this.loadComponents();
    this.loadAds();
  }

  ngOnDestroy(): void {
    clearInterval( this.interval );
  }

  loadComponents (){
    /*this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

    const addItem = this.ads[ this.currentAdIndex ];

    const componentFactoryRef =
      this.componentFactoryResolver.resolveComponentFactory(addItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>( componentFactoryRef );

    componentRef.instance.data = addItem.data;*/

    this.switchToNextView();
  }

  loadAds() {
   /* this.interval = setInterval( () => {
      this.loadComponents();
    }, 3000);*/
  }

  switchToNextView( ){
    let viewRequest : ViewRequest ;
    if ( this.viewData.viewName == null ){
      viewRequest = new ViewRequest('start', null);
    }else{
      viewRequest = new ViewRequest( this.viewData.nextViewName, this.viewData.data);
    }

    this.viewService.getViewAndDataFromBE( viewRequest )
      .subscribe( viewData => {
        this.viewData = viewData ;
        this.showNextView();
      })
  }

  showNextView(){
    let nextViewName = this.viewData.nextViewName;
    let componentName = '';
    if ( nextViewName == 'profile'){
      componentName = 'HeroProfileComponent';
    }else if ( nextViewName == 'job' ){
      componentName = 'HeroJobAdComponent';
    }

    const addItem = this.ads.find( item => item.componentName == componentName );

    let componentFactoryRef: ComponentFactory<any>;
    // @ts-ignore
    componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory(addItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>( componentFactoryRef );

    componentRef.instance.viewData = this.viewData;
  }
}
