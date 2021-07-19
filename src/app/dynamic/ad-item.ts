import {Type} from "@angular/core";

/**
 * AdItem is the place holder for different types of ads
 * an AdItem includes a component of any type & data for the ad of any type
 */
export class AdItem {
  constructor( public componentName: string, public component: Type<any> , public data: any) {
  }
}
