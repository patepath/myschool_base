import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {ConfigService} from '../services/config.service'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

	public urlapi: string;

  constructor(
		public http: HttpClient,
		public config: ConfigService
  ) { 

		this.urlapi = config.getURL();
  }

  get(): Observable<RegView[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "register")
		.set("action" , "get");

    const options = { headers, params };

		return this.http.get<RegView[]>(this.urlapi, options);
  } 
}

export interface RegView {
 	Ref: number,
	IdCard: string,
	Grade: string,
	Room: string,
	Code: string,
	FirstName: string,
	LastName: string,
}
