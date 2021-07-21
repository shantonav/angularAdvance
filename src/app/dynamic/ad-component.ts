import {ViewData} from "./ad-banner/view-data";
import {EventEmitter} from "@angular/core";

export interface AdComponent {
  data: any;
  viewData: Partial<ViewData>;
  modifiedData: EventEmitter<ViewData>;
}
