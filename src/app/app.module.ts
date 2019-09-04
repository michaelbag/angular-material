import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Material {{
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// }}

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { RedmineProjectsService } from './redmine-projects.service';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule
} from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { AboutComponent } from './about/about.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import {
  RequestCache,
  RequestCacheWithMap
} from './request-cache.service';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { ProjectService } from './redmine/project.service';
import { ProjectsComponent } from './redmine/projects/projects.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { PackageSearchService } from './package-search/package-search.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { ProjectComponent } from './redmine/project/project.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RoutingModule } from './routing/routing.module';

// import { AuthService } from './auth.service';

@NgModule({

  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'My-Xsrf-Cookie',
    //   headerName: 'My-Xsrf-Header',
    // }),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {
    //     dataEncapsulation: false,
    //     passThruUnknownUrl: true,
    //     put204: false // return entity after PUT/update
    //   }
    // )
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    ConfigComponent,
    AboutComponent,
    MessagesComponent,
    ProjectsComponent,
    ProjectComponent,
    NavBarComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    RedmineProjectsService,
    ConfigService,
    MessageService,
    {
      provide: RequestCache,
      useClass: RequestCacheWithMap //,
      // multi: true
    },
    httpInterceptorProviders,
    ProjectService,
    InMemoryDataService,
    PackageSearchService,
    // HttpErrorHandlerService //,
    // AuthService
  ]
})
export class AppModule { }
