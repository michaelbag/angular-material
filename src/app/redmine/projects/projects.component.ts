import { Component, OnInit } from '@angular/core';
import { Project, Projects, ProjectService } from '../project.service';
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
  headers: any;

  constructor(private projectService: ProjectService, private messageService: MessageService) { }

  ngOnInit() {
    this.title = "Список проектов";
    /*
    this.projectService.getProjectList()
      .subscribe((data: Projects) => {
        
        this.projects = data.projects;
        // this.messageService.add(data.projects);
      });
      */
  }

  getText() {
    this.projectService.getProjectList()
      .subscribe((data: Projects) => {
        this.projects = data.projects;
        // this.messageService.add(data.projects);
      });
  }

   showProjectsResponse() {
    this.projectService.getProjectsResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //this.projects = { ...resp.body.projects };
      });
   }
}