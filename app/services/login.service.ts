import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Md5 } from 'md5-typescript';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlapi: string;
  private currentUserSubject: BehaviorSubject<User>;
  private _currentUser: Observable<User>;

  private payload: {
    A: string;
    B: string;
  }

  private user: User; 

  constructor(private http: HttpClient, private router: Router, private config: ConfigService) { 

    this.urlapi = config.getURL(); 

    let curr_user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.currentUserSubject = new BehaviorSubject<User>(curr_user);
    this._currentUser = this.currentUserSubject.asObservable();

    this.payload =  {
      A:  '',
      B: '', 
    }

    this.user = {
      Code: '',
      Name: '',
      Fullname: '',
      Role: '',
    }

  }

  login(loginfrm: Loginfrm): Observable<User> {

    localStorage.setItem('currentUser', '{}');
    
    this.payload.A = Md5.init(loginfrm.username);
    this.payload.B = Md5.init(loginfrm.userpassword);

 		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "user", action: "login" };
		const options = { headers, "observe?": "body", params };

    return this.http.post<User>(this.urlapi, this.payload, options);
  }

  logut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  get getCurrentUser(): Observable<User> {  
    return this._currentUser;
  } 

}

export interface Loginfrm {
  username: string;
  userpassword: string;
}

export interface User {
  Code: string;
  Name: string;
  Fullname: string;
  Role: string;
}
