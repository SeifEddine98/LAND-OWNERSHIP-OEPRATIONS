import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  public API = '//localhost:1110/CitoyenSimple';

  constructor(private http: HttpClient) { 

  }
  get (id: any): Observable<any> {
    return this.http.get(this.API + '/GetCitoyenSimple/' + id);
  }
  getAll(): Observable<any> {
    return this.http.get(this.API + '/allCitoyensSimples');
  }

  save(client: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API + '/newCitoyenSimple', client);
    return result;
  }
  authent(client: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API + '/AuthenCitoyenSimple', client);
    return result;
  }
  updateById(client: any, id: number): Observable<any> {
    let result: Observable<Object>;

      result = this.http.put(this.API + '/updateCitoyenSimple/' + id, client);

    return result;
  }
  remove(id: number) {
    const url = `${this.API}/removeCitoyenSimple/${id}`;
    return this.http.delete(url);
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
