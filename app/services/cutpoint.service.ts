import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { StudentPoint, Student } from '../school';
import { ConfigService } from './config.service';

const headers =  new HttpHeaders({ 
	'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class StudentPointService {

	private urlapi: string;

	constructor(
		private config: ConfigService,
		private http: HttpClient) { 
	
		this.urlapi = config.getURL();
	}

	get(): Observable<StudentPoint[]> {

		const params = new HttpParams()
		.set("service",  "cutpoint")
		.set("action" , "1");

		const options = { headers, "observe?": "body", params };
		
		return this.http.get<StudentPoint[]>(this.urlapi, options);
	}

	getStudentsByRef(ref: number): Observable<Student[]> {

		const params = new HttpParams()
		.set("service",  "cutpoint")
		.set("action" , "3")
		.set("cutpoint_ref" , ref.toString());

		const options = { headers, "observe?": "body", params };
		
		return this.http.get<Student[]>(this.urlapi, options);
	}

	getByStudent(student_ref: number): Observable<StudentPoint[]> {

		const params = new HttpParams()
		.set("service",  "cutpoint")
		.set("action" , "4")
		.set("student_ref" , student_ref.toString());

		const options = { headers, "observe?": "body", params };

		return this.http.get<StudentPoint[]>(this.urlapi, options);
	}

save(cutpoint: StudentPoint): Observable<StudentPoint[]> {
		
		const params = new HttpParams()
		.set("service", "cutpoint")
		.set("action" , "2");

		const options = { headers, "observe?": "body", params };

		return this.http.post<StudentPoint[]>(this.urlapi, cutpoint, options);
	}

}
