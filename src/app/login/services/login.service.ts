import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) { }

    login(userName: string, password: string) {
        return this.http.post('https://localhost:44330/API/user/login', {
            UserName: userName,
            Password: password
        })
    }
}