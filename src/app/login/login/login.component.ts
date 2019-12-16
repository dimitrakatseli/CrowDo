import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { UserState } from 'src/app/user.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private userState: UserState) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  formSubmit() {
    if (this.myForm.invalid) {
      return
    }

    this.loginService.login(this.myForm.value.userName, this.myForm.value.password).subscribe(
      (data: any) => {
        if (data) {
          localStorage.setItem('userId', data.userID)
          this.userState.isLoggedIn = true;
          this.router.navigate(['']);
        } else {
          alert('wrong credentials');
        }
      }
    )

  }
}
