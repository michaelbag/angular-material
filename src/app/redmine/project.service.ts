import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders, RequestOptions } from '@angular/common/http';
import { ConfigService, Config } from '../config/config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
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
  homepage: String;
}

export interface Projects {
  projects: Project[];
  total_count: number;
  offset: number;
  limit: number;
}

@Injectable()
export class ProjectService {

  error: any;
  projectListURL: string;
  requestOptions: RequestOptions;

  constructor(private config: ConfigService, private http: HttpClient, private messageService: MessageService) {

  }

  getProject(id: string): Observable<Project> {
    return (
      this.config.getConfig()
        .pipe(
          retry(3),
          switchMap((configData: Config) => {
            this.messageService.add(`getProject, try get ${configData.rootURL}/projects/${id}.json`);
            this.http.get(`${configData.rootURL}/projects/${id}.json`,
              {
                headers: { 'Access-Control-Allow-Origin': '*', 'X-Redmine-API-Key': configData.apiKey },
                params: { 'key': configData.apiKey }
              })
              .pipe(
                retry(3),
                catchError(this.handleError) // then handle the error
              )
              .subscribe((data: any) => {
                this.messageService.add(`Got project ${data.project.name}!`);
                return (data.project);
              });

          }),
          catchError(this.handleError)
        )
    );
  }

  /*
    getProjectListURL(): string {
      this.config.getConfig()
        .subscribe((data: Config) => {
          // return (`${data.rootURL}/projects.json`);
          return ('assets/test.json');
        });
    }
    */

  getProjectList() {
    return (
      this.config.getConfig()
        .pipe(
          retry(3),
          switchMap((configData: Config) => {
            return (this.http.get<Projects>(`${configData.rootURL}/projects.json`,
              {
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'X-Redmine-API-Key': configData.apiKey
                }, params: { 'key': configData.apiKey }
              })
              .pipe(
                retry(3),
                catchError(this.handleError) // then handle the error
              ));
          }),
          catchError(this.handleError)
        )
    );
  }

  getHttpOptions(): RequestOptions {
    if (!this.requestOptions) {
      this.requestOptions = new RequestOptions({
        'headers': new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          // 'apiKey': this.getConfig().apiKey
        }),

        'params': new HttpParams({
          // 'apiKey': this.getConfig().apiKey
        }),
        'observe': 'response'
      });
      //this.requestOptions.headers.set('key', this.config.getApiKey());
      //this.requestOptions.params.set('key', this.config.getApiKey());
    }
    return (this.requestOptions);
  }

  getProjectsResponse(): Observable<HttpResponse<Projects>> {
    // TODO: Get Response type in function
    return (
      this.config.getConfig()
        .pipe(
          retry(3),
          switchMap((configData: Config) => {
            return (this.http.get<Projects>(`${configData.rootURL}/projects.json`,
              {
                headers: { 'Access-Control-Allow-Origin': '*', 'X-Redmine-API-Key': configData.apiKey },
                params: { 'key': configData.apiKey }
              })
              .pipe(
                retry(3),
                catchError(this.handleError)
              ))
          })
        )
    );

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