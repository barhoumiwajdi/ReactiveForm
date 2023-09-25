import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {


  _url = 'http://localhost:4000/register'
  constructor(private _http: HttpClient) { }

  addUser(user: any) {
    return this._http.post<any>(this._url, user)
  }
  getall() {
    return this._http.get<any>(this._url)
      .pipe(catchError(this.ErrorHandler))
  }
  ErrorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
