import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {ConfigService} from '../services/config.service'
import {Checkinout} from '../school';

@Injectable({
  providedIn: 'root'
})
export class CheckinoutService {

	public urlapi: string;

	constructor(
		public http: HttpClient,
		public config: ConfigService
		) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<Checkinout[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "checkinout")
		.set("action" , "1");

	  	const options = { headers, params };

		return this.http.get<Checkinout[]>(this.urlapi, options);
	}

	getByRef(ref: string): Observable<Checkinout> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "checkinout")
		.set("action" , "get_by_ref")
		.set("ref", ref);

	  	const options = { headers, params };

		return this.http.get<Checkinout>(this.urlapi, options);
	}

	getByCode(code: string) {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "checkinout")
		.set("action" , "get_by_code")
		.set("code", code);

	  	const options = { headers, params };

		return this.http.get<Checkinout[]>(this.urlapi, options);
	}

	getFaceImg(checkinout: Checkinout) {
		return this.http.get(this.urlapi+"?service=faceimg&action=1&datetime=" + checkinout.DateTime + "&code=" + checkinout.StudentCode, {responseType: "text"});
	}

}
