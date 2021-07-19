import { Component } from '@angular/core';
import {HelloServiceService} from "./hello-service.service";
import { HelloResponse } from "./hello-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ HelloServiceService ]
})
export class AppComponent {
  title = 'TestAngularProject';
  helloResponse: HelloResponse | undefined;
  error: any;
  headers: string[] = [];

  constructor(private helloService: HelloServiceService) {
  }

  getDataToShow (){
    this.helloService.getDataFromBackEnd()
       .subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      console.log( this.headers )

      // access the body directly, which is typed as `HelloResponse`.
      this.helloResponse = { ...resp.body! };
    });
  }


  clear() {
    this.helloResponse = undefined;
    this.error = undefined;
    this.headers = [];
  }
}
