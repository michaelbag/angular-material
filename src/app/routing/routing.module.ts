import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../redmine/projects/projects.component';
import { ProjectComponent } from '../redmine/project/project.component';
import { DashBoardComponent } from '../dash-board/dash-board.component';


@NgModule({
  imports: [

    RouterModule.forRoot(
      [
        { path: '', component: DashBoardComponent, pathMatch: 'full'},
        { path: 'projects', component: ProjectsComponent },
        { path: 'projects/:id', component: ProjectComponent }
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }