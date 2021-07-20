import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from "@angular/common/http";
import { HelloResponse} from "./hello-response";
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HelloServiceService {



  constructor(private http: HttpClient) {  }

  getDataFromBackEnd(): Observable<HttpResponse<HelloResponse>> {

    let inputParams  = new HttpParams();
    inputParams = inputParams.set('inputName', 'shantonav');
    let endpoint = environment.apiUrl + 'hello/helloWorld';
    // ?inputName=shantonav
    return this.http.get<HelloResponse>(
      endpoint, { observe: 'response', params: inputParams }
      ).pipe( catchError( this.handleError  ));

  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
