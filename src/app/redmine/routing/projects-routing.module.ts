import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from '../project/project.component';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent, data: { title: 'Projects' } },
  { path: 'project/:id', component: ProjectComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }