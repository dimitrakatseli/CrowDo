import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { UserState } from 'src/app/user.state';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router, private userState: UserState) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        fistName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required)
      }
    );
  }

  formSubmit() {
    if (this.myForm.invalid) {
      return
    }

    this.registerService.register(this.myForm.value.fistName, this.myForm.value.lastName,
      this.myForm.value.userName, this.myForm.value.password,this.myForm.value.email ).subscribe(
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
