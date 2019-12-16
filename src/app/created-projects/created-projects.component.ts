import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.service';

@Component({
  selector: 'app-created-projects',
  templateUrl: './created-projects.component.html',
  styleUrls: ['./created-projects.component.css']
})
export class CreatedProjectsComponent implements OnInit {

  projects: Project[]
  constructor(private fundingService: FundingService) { }

  ngOnInit() {
    this.fundingService.getFundingsByUserId().subscribe((data) => {
      this.fundings = data;
    })
  }
}
