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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { AboutComponent } from './about/about.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

// import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { ProjectService } from './redmine/project.service';
import { ProjectsComponent } from './redmine/projects/projects.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    ConfigComponent,
    AboutComponent,
    MessagesComponent,
    ProjectsComponent
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
    ProjectService
  ]
})
export class AppModule { }
