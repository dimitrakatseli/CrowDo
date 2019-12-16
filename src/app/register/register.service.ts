import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register( firstName: string, lastname:string, username: string, password: string,email: string ) {
      return this.http.post('https://localhost:44330/API/register/user', {
          FirstName: firstName,
          LastName: lastname,
          UserName:username,
          Password:password,
          Email:email
      })
  }
}
