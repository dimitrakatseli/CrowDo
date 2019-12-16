import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundingService, Funding } from '../funding.service';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {
  fundings: Funding[]
  constructor(private fundingService: FundingService) { }

  ngOnInit() {
    this.fundingService.getFundingsByUserId().subscribe((data) => {
      this.fundings = data;
    })
  }

}
