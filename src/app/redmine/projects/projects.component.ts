import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  title: string;
  projectsText: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.title = "Список проектов";
    this.projectService.getProjectList()
      .subscribe((data: Project[]) => {
        this.projects = data;
        console.log(data)
      });
  }

  getText() {
    this.projectService.getProjectList()
      .subscribe((data: any[]) => {
        this.projectsText = data.length
      });
  }

}