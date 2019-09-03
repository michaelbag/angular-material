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

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.title = "Список проектов";
    this.projectService.getProjectList()
      .subscribe((data: any[]) => {
        this.projects = data;
        console.log(data)
        });
  }

}