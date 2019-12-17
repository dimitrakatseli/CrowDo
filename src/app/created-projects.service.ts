import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects.service';

@Injectable({
  providedIn: 'root'
})
export class CreatedProjectsService {

  private readonly endpoint = 'https://localhost:44330/API/user/project/';
  constructor(private http: HttpClient) { }

  getProjectsByUserId(): Observable<Project[]> {
      const userId = localStorage.getItem('userId');
      return this.http.get<Project[]>(this.endpoint + userId);
  }

}
