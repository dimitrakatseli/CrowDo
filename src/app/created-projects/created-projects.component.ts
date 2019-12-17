import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.service';
import { CreatedProjectsService } from '../created-projects.service';

@Component({
  selector: 'app-created-projects',
  templateUrl: './created-projects.component.html',
  styleUrls: ['./created-projects.component.css']
})
export class CreatedProjectsComponent implements OnInit {

  projects: Project[]
  constructor(private projectService: CreatedProjectsService) { }

  ngOnInit() {
    this.projectService.getProjectsByUserId().subscribe((data) => {
      this.projects = data;
    })
  }
}
