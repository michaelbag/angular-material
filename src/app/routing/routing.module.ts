import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';

const routes:Routes = [
        { path: 'dashboard', component: DashBoardComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes,
      
      { enableTracing: true } // <-- debugging purposes only
      
    ),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RoutingModule { }