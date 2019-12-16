import { Component, OnInit } from '@angular/core';
import { UserState } from 'src/app/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  constructor(private userState: UserState) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userState.isLoggedIn$;
  }

  logout() {
    localStorage.removeItem('userId')
    this.userState.isLoggedIn = false
  }

}
