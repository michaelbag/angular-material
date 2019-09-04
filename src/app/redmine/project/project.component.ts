import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project, ProjectService } from '../project.service';
import { ProjectsComponent } from '../projects/projects.component';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    this.projectService.getProject(this.route.snapshot.paramMap.get('id'))
      .pipe(switchMap((data: any) => {
        return (data.project);
      }))
      .subscribe((data: Project) => {
        this.project = data;
      });
  }

}