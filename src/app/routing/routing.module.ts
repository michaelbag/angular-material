import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'projects', component: 'ProjectsComponent' },
  { path: 'project/:id', component: 'ProjectsComponent' }
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),    
  ],
  declarations: [],
  exports: [ RouterModule ]  
})
export class RoutingModule { }