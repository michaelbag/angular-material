import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  apiKey: string;
  rootURL: string;
  test: string;
}

@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';
  _config: Config;

  constructor(private http: HttpClient) { }

  loadConfig() {
    this.getConfig().
      subscribe(
        (data: Config) => this._config = { ...data }
      );
  }

  config(): Config {
    if (!this._config) { this.loadConfig(); }
    return (this._config);
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getRootURL(): string {
    return (this.config().rootURL);
  }

  getApiKey(): string {
    return (this.config().apiKey);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
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

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
}