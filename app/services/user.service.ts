import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlapi: string;

  constructor(private http: HttpClient ,private config: ConfigService) { 
    this.urlapi = config.getURL(); 
  }

  getAll(): Observable<User[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "user", action: "get_all"};
	const options = { headers, "observe?": "body", params };
		
	return this.http.get<User[]>(this.urlapi, options);
  }

  getByRef(ref: string): Observable<User> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "user", action: "get_by_ref", ref: ref};
	const options = { headers, "observe?": "body", params };
		
	return this.http.get<User>(this.urlapi, options);
  }

  save(user: User): Observable<User[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "user", action: "save"};
	const options = { headers, "observe?": "body", params };

	return this.http.post<User[]>(this.urlapi, user, options);
  }

  remove(ref: string): Observable<User[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "user", action: "delete", ref: ref};
	const options = { headers, "observe?": "body", params };

	return this.http.get<User[]>(this.urlapi, options);
  }

}

export interface User {
  Ref: number,
  IdCard: string,
  Code: string,
  Name: string,
  Password: string,
  Fullname: string,
  Role: string,
}
