import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects.service';

export interface Funding {
    fundingID: number
    numPackages?: number
    project: Project
    projectID: number
    packageID?: number
    package: any
}


@Injectable({
    providedIn: 'root'
})
export class FundingService {
    private readonly endpoint = 'https://localhost:44330/API/fundings/';
    constructor(private http: HttpClient) { }

    getFundingsByUserId(): Observable<Funding[]> {
        const userId = localStorage.getItem('userId');
        return this.http.get<Funding[]>(this.endpoint + userId);
    }

}
