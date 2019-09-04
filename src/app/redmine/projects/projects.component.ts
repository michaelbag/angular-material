import { Component, OnInit } from '@angular/core';
import { Project, Projects, ProjectService } from '../project.service';
import { Response } from '@angular/common/http';

import {MessageService} from '../../message.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects: Project[];
  title: string;
  projectsText: any;
  header: any;

  constructor(private projectService: ProjectService, private messageService: MessageService) { }

  ngOnInit() {
    this.title = "Проекты";
    this.loadProjectsList();
  }

  loadProjectsList() {
    this.projectService.getProjectList()
      .subscribe((data: Projects ) => {        
        this.projects = data.projects;
      });
  }

   showProjectsResponse() {
    this.projectService.getProjectsResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.header = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //this.projects = { ...resp.body.projects };
      });
   }
}