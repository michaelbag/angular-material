import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  apiKey: string;
  rootURL: string;
}

@Injectable()
export class ConfigService {
  configUrl = "assets/redmine.config.json";

  constructor(private http: HttpClient) { 

  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
  return this.http.get<Config>(
    this.configUrl, { observe: 'response' });
}

}