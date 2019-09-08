import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './routing/projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

// Material {{
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
// }}

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ]
})
export class RedmineModule { }