import { Component, OnInit } from '@angular/core';
import { ProjectsService,Project } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectsService) { }

  projects:Array<Project>;

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      }
    )

  }

}
