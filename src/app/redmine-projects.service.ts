import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class RedmineProjectsService {
  configUrl = "assets/config/redmine.config.json";

  private
  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get(this.configUrl);
  }
}