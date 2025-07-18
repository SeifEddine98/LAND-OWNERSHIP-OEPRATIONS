import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraitserviceService {
  public API = '//localhost:1110/Extrait';

  constructor(private http: HttpClient) {

   }
   getExtrait (extrait: any, dated: string, datef: string): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API + '/ConsltExtrait/' + dated + '/' + datef, extrait);
    return result;
  }
   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
