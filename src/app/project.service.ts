import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'https://localhost:44330/API/projects/';
  
   
    constructor(private http: HttpClient ) { }
  
    getProject(id:number): Observable<Project> {
      return this.http.get<Project>(this.endpoint+id);
    }
}
