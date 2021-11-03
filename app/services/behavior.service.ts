import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Behavior, Opt } from '../school';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class BehaviorService {

	private urlapi: string;

	constructor(private http: HttpClient, private config: ConfigService) { 
		this.urlapi = config.getURL();
	}

	get(): Observable<Behavior[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "1");

	  	const options = { headers, "observe?": "body", params };

		return this.http.get<Behavior[]>(this.urlapi, options);
	}

	getByRef(ref: string): Observable<Behavior> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "get_by_ref");

	  	const options = { headers, "observe?": "body", params, ref: ref };

		return this.http.get<Behavior>(this.urlapi, options);
	}

	getByGroup(groupno: string): Observable<Behavior[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "5")
		.set("groupno", groupno);

	  	const options = { headers, "observe?": "body", params };

		return this.http.get<Behavior[]>(this.urlapi, options);
	}

	getGroups(): Observable<Opt[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "3");

	  	const options = { headers, params };

		return this.http.get<Opt[]>(this.urlapi, options);
	}

	getTopic(groupno: string): Observable<Opt[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "4")
		.set("groupno" , groupno);

	  	const options = { headers, params };

		return this.http.get<Opt[]>(this.urlapi, options);
	}

	save(behavior: Behavior): Observable<Behavior[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "2");

		const options = { headers, "observe?": "body", params };

		return this.http.post<Behavior[]>(this.urlapi, behavior, options);
	}

	delete(behavior: Behavior): Observable<Behavior[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "6");

		const options = { headers, "observe?": "body", params };

		return this.http.post<Behavior[]>(this.urlapi, behavior, options);
	}
}
