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
  backDisabled: boolean = true;


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

  switchToNextView(goback: boolean = false ){
    let viewRequest : ViewRequest ;
    if ( this.viewData.viewName == null ){
      viewRequest = new ViewRequest('start', null);
    }else{
      console.log (" Sending modified data "+ JSON.stringify( this.viewData ) +" of " + this.viewData.viewName + " to BE");
      viewRequest = new ViewRequest( this.viewData.nextViewName, this.viewData.data);
      if ( goback ){
        viewRequest = new ViewRequest( this.viewData.viewName, this.viewData.data);
      }
    }

    this.viewService.getViewAndDataFromBE( viewRequest , goback)
      .subscribe( viewData => {
        if ( !goback) {
          this.showNextView( viewData );
        }else{
          this.showPreviousView( viewData );
        }
      })
  }

  showNextView(data?: ViewData){

    if ( typeof  data !== 'undefined' && data != null ){
      this.viewData = data ;
    }
    let nextViewName = this.viewData.nextViewName;
    let componentName = '';
    if ( nextViewName == 'profile'){
      componentName = 'HeroProfileComponent';
    }else if ( nextViewName == 'job' ){
      componentName = 'HeroJobAdComponent';
    }
    let previousViewName = this.viewData.viewName;
    if (  previousViewName != '' && previousViewName != 'start'){
      this.backDisabled = false;
    }

    const addItem = this.ads.find( item => item.componentName == componentName );

    let componentFactoryRef: ComponentFactory<any>;
    // @ts-ignore
    componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory(addItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>( componentFactoryRef );


    if ( typeof  data !== 'undefined' && data != null ){
      componentRef.instance.viewData = data ;
    }
    componentRef.instance.modifiedData.subscribe( (event: ViewData) => { this.listenToDynamicComponentEvent( event )})
  }

  listenToDynamicComponentEvent (modifiedData: ViewData) {
    console.log ("Received this " + modifiedData );
    this.viewData = modifiedData ;
  }

  showPreviousView(data?: ViewData){

    if ( typeof  data !== 'undefined' && data != null ){
      this.viewData = data ;
    }
    let previousViewName = this.viewData.viewName;
    let componentName = '';
    if ( previousViewName == 'profile'){
      componentName = 'HeroProfileComponent';
    }else if ( previousViewName == 'job' ){
      componentName = 'HeroJobAdComponent';
    }

    if ( componentName != '') {
      const addItem = this.ads.find(item => item.componentName == componentName);

      // @ts-ignore
      this.currentComponent = addItem ;

      let componentFactoryRef: ComponentFactory<any>;
      // @ts-ignore
      componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory(addItem.component);

      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();



      const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactoryRef);

      if ( typeof  data !== 'undefined' && data != null ){
        componentRef.instance.viewData = data ;
      }
      componentRef.instance.modifiedData.subscribe( (event: ViewData) => { this.listenToDynamicComponentEvent( event )})


      this.backDisabled = false;
    }else{
      this.backDisabled = true;
    }
  }
}
