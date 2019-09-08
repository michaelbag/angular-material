import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from '../project/project.component';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectComponent },
  { path: 'project/:id', component: ProjectComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }