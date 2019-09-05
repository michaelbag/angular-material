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
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashBoardComponent },
        { path: 'project/:id', component: ProjectComponent },
        { path: 'projects', component: ProjectsComponent }
        
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }