import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserState {
    private _isLoggedIn = new BehaviorSubject<boolean>(false)

    isLoggedIn$ = this._isLoggedIn.asObservable()


    get isLoggedIn() {
        return this._isLoggedIn.value;
    }


    set isLoggedIn(value: boolean) {
        this._isLoggedIn.next(value)
    }

}