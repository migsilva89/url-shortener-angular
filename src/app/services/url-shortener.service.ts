import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomError, ShortUrlData } from '../interfaces/data';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  apiUrl = 'https://api.shrtco.de/v2';

  constructor(private http: HttpClient) {}

  getShortUrl(originalUrl: string): Observable<ShortUrlData> {
    return this.http
      .get<ShortUrlData>(`${this.apiUrl}/shorten?url=${originalUrl}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: CustomError): Observable<never> {
    return throwError(() => error.error);
  }
}
