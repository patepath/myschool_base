import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service';
import { BehavioralPoint, BehaviorPoint, Opt } from '../school';

@Injectable({
  providedIn: 'root'
})
export class BehavioralPointService {

	private urlapi: string;

	constructor(private http: HttpClient, private config: ConfigService) {
		this.urlapi = config.getURL();
	}

	get(): Observable<BehavioralPoint[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "1");

	  	const options = { headers, "observe?": "body", params };

		return this.http.get<BehavioralPoint[]>(this.urlapi, options);
	}

	getByGroup(groupno: string): Observable<BehavioralPoint[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "5")
		.set("groupno", groupno);

	  	const options = { headers, "observe?": "body", params };

		return this.http.get<BehavioralPoint[]>(this.urlapi, options);
	}

	getByRef(ref: string): Observable<BehavioralPoint> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "get_by_ref")
		.set("ref", ref);

	  	const options = { headers, "observe?": "body", params };

		return this.http.get<BehavioralPoint>(this.urlapi, options);
	}

	getGroup(): Observable<Opt[]> {

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

	save(behavioral: BehavioralPoint): Observable<BehavioralPoint[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const options = { headers, "observe?": "body" };
		
		return this.http.post<BehavioralPoint[]>(this.urlapi + "?service=behavioral&action=2", behavioral, options);
	}

	delete(behavioral: BehavioralPoint): Observable<BehavioralPoint[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "behavioral")
		.set("action" , "6");

		const options = { headers, "observe?": "body", params };

		return this.http.post<BehavioralPoint[]>(this.urlapi, behavioral, options);
	}
}
