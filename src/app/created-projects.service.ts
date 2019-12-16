import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CreatedProjectsService {

  private readonly endpoint = 'https://localhost:44330/API/fundings/';
  constructor(private http: HttpClient) { }

  getFundingsByUserId(): Observable<Funding[]> {
      const userId = localStorage.getItem('userId');
      return this.http.get<Funding[]>(this.endpoint + userId);
  }

}
