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

import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule],
  declarations: [AppComponent, HelloComponent, MenuComponent, ConfigComponent],
  bootstrap: [AppComponent],
  providers: [RedmineProjectsService, ConfigService]
})
export class AppModule { }
