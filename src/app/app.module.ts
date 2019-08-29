import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModuleModule ],
  declarations: [ AppComponent, HelloComponent, ProjectListComponent, MainMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
