import {ViewData} from "./ad-banner/view-data";

export interface AdComponent {
  data: any;
  viewData: Partial<ViewData>;
}
