import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ViewRequest} from "./view-request";
import {ViewData} from "./view-data";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ViewDeterminationService {

  constructor(private http: HttpClient) { }

  getViewAndDataFromBE(viewRequest: ViewRequest, goBack: boolean = false): Observable<ViewData> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    let endpoint = environment.apiUrl + 'hello/helloWorld';
    if ( goBack ){
      endpoint = endpoint + "/goback";
    }
    return this.http.post<ViewData>( endpoint , viewRequest, { headers: headers})
      .pipe( catchError( this.handleError ));
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
