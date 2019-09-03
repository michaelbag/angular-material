import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { ConfigService, Config } from '../config/config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageService } from '../message.service';

// Для информации по формату: https://www.redmine.org/projects/redmine/wiki/Rest_Projects
export interface Project {
  id: number;
  name: string;
  identifier: string;
  description: string;
  status: number;
  is_public: boolean;
  created_on: Date;
  updated_on: Date;
}

export interface Projects {
  projects: Project[];
  total_count: number;
  offset: number;
  limit: number;
}

@Injectable()
export class ProjectService {

  config: Config;
  error: any;
  projectListURL: string;

  constructor(private configService: ConfigService, private http: HttpClient, private messageService: MessageService) {

  }

  getConfig(): Config {
    if (!this.config) {
      this.configService.getConfig()
        .subscribe((data: Config) => this.config = { ...data },
          error => this.error = error);
    }
    return (this.config);
  }

  getProjectListURL(): string {
    if (!this.projectListURL) {
      this.projectListURL = `${this.getConfig().rootURL}/projects.json`;
      // ?apiKey=${this.getConfig().apiKey}
    }
    return (this.projectListURL);
  }

  getProjectList() {

    this.messageService.add(`Try to get ${this.getProjectListURL()}...`);

    //let params = new HttpParams().set("apiKey", this.config.apiKey);
    /*
    return this.http.jsonp<Projects>(this.getProjectListURL(), 'callback').pipe(
      retry(3),
      catchError(this.handleError) // then handle the error
    );
    */

    let getHeaders = new HttpHeaders().set("apiKey", this.getConfig().apiKey);
    let getParams = new HttpParams().set("apiKey", this.getConfig().apiKey);

    return this.http.get<Projects>(this.getProjectListURL(), { headers: getHeaders, params: getParams })
      .pipe(
        retry(3),
        catchError(this.handleError) // then handle the error
      );

  }

  getProjectsResponse(): Observable<HttpResponse<Projects>> {
    let headers = new HttpHeaders().set("apiKey", this.getConfig().apiKey);
    return this.http.get<Projects>(this.getProjectListURL(), { observe: 'response', headers: headers });
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
  /*
    getResponse(): Observable<HttpResponse<Project>> {
      return this.http.get<Project>(
        this.configSerconfigUrl, { observe: 'response' });
    }
    */

}