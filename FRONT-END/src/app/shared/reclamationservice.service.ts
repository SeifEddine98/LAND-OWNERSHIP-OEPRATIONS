import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationserviceService {
  public API = '//localhost:1110/Reclamation';

  constructor(private http: HttpClient) {

   }
   save(reclamation: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API + '/newReclamation', reclamation);
    return result;
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/allReclas');
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
