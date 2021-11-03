import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Grade } from '../school';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class GradeService {

	private urlapi: string;

	constructor(
		private http: HttpClient,
		private config: ConfigService) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<Grade[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "grade", action: "1" };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Grade[]>(this.urlapi, options);
	}

	getByRef(ref: string): Observable<Grade> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "grade", action: "get_by_ref", ref: ref };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Grade>(this.urlapi, options);
	}

	save(grade: Grade): Observable<Grade[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "grade", action: "2" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Grade[]>(this.urlapi, grade, options);
	}

	remove(grade: Grade): Observable<Grade[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "grade", action: "3" };
		const options = { headers, "observe?": "body", params };

		console.log(grade);

		return this.http.post<Grade[]>(this.urlapi, grade, options);

	}
	
}
