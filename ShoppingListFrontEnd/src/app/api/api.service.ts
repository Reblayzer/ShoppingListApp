import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  API_URL = 'http://localhost:8989/';

  constructor(private http: HttpClient) {
  }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.API_URL}${path}`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.API_URL}${path}`, body).pipe(
      catchError(this.handleError)
    );
  }

  patch<T>(path: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.API_URL}${path}`, body).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}${path}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
   if(error.status >= 300) {
     console.error('Response body:', error.error);
     return throwError('Something bad happened; please try again later.');
   }
   else {
     return of(null);
   }
  }
}
