import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService,private activatedRoute: ActivatedRoute) { }

  project:Project;
  

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.projectService.getProject(id).subscribe(
      (data) => {
        this.project = data;
      }
    )

  }



}
