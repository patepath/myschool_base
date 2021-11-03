import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CheckinProfile } from '../school'
import { ConfigService } from './config.service';
import { convertCompilerOptionsFromJson } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class CheckinprofileService {

	private urlapi: string;

	constructor(
		private http: HttpClient, 
		private config: ConfigService) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<CheckinProfile[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service", "checkinprofile")
		.set("action" , "get");

	  	const options = { headers, params };

		return this.http.get<CheckinProfile[]>(this.urlapi, options);
	}

	getGroup(): Observable<string[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service", "checkinprofile")
		.set("action" , "get_group");

	  	const options = { headers, params };

		return this.http.get<string[]>(this.urlapi, options);
	}

	save(checkinprofile: CheckinProfile): Observable<CheckinProfile[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "checkinprofile")
		.set("action" , "save");

		const options = { headers, "observe?": "body", params };

		return this.http.post<CheckinProfile[]>(this.urlapi, checkinprofile, options);
	}

	delete(yearedu: string, group: string, datein: string): Observable<CheckinProfile[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "checkinprofile")
		.set("action" , "delete")
		.set("yearedu" , yearedu)
		.set("group" , group)
		.set("datein" , datein);

		const options = { headers, "observe?": "body", params };

		return this.http.get<CheckinProfile[]>(this.urlapi, options);
	}

}
