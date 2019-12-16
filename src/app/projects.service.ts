import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  goal: number;
  packages: any[];
  projectID: number;
}



@Injectable({
  providedIn: 'root'
})


export class ProjectsService {
  private readonly endpoint = 'https://localhost:44330/API/projects';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.endpoint);
  }

}
