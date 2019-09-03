import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigService, Config } from '../config/config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageService } from '../message.service';


export interface Project {
  id: number;
  name: string;
  identifier: string;
  description: string;
  is_public: boolean;
  parent_id: number;
}

@Injectable()
export class ProjectService {

  config: Config;
  error: any;

  constructor(private configService: ConfigService, private http: HttpClient, private messageService: MessageService) {

  }

  getProjectList() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data },
        error => this.error = error);

    // Для информации по формату: https://www.redmine.org/projects/redmine/wiki/Rest_Projects
    let projectListURL = `${this.config.rootURL}/projects.xml`;
    this.messageService.add (`Try to get ${projectListURL}...`);

    // let params = new HttpParams().set("apiKey", this.config.apiKey);


    return this.http.jsonp(projectListURL, 'callback').pipe(
      retry(3),
      catchError(this.handleError) // then handle the error
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