import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Parent, Opt } from '../school';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class ParentService {

	private urlapi: string;

	constructor(
		private http: HttpClient, 
		private config: ConfigService) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<Parent[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const options = { headers, "observe?": "body" };

		return this.http.get<Parent[]>(this.urlapi + "?service=parent&action=1", options);
	}

	getByRef(ref: string): Observable<Parent> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "parent", action: "get_by_ref", ref: ref };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Parent>(this.urlapi, options);
	}

	getByStudent(studentref: number): Observable<Parent[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "parent", action: "3", studentref: String(studentref) };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Parent[]>(this.urlapi, options);
	}

	save(parent: Parent): Observable<Parent[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "parent", action: "2" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Parent[]>(this.urlapi, parent, options);
	}

	delete(ref: string): Observable<Parent[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "parent", action: "delete", ref: ref };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Parent[]>(this.urlapi,  options);
	}
}
