import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service';
import { Teacher } from '../school';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private urlapi: string;

  constructor(
    private http: HttpClient, 
    private config: ConfigService) { 

    this.urlapi = config.getURL();
  }

  get(): Observable<Teacher[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "get"};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Teacher[]>(this.urlapi, options);
  }

  getByRef(ref: string): Observable<Teacher> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "get_by_ref", ref: ref};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Teacher>(this.urlapi, options);
  }

  getByCode(code: string): Observable<Teacher> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "get_by_code", code: code};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Teacher>(this.urlapi, options);
  }

  getByGrade(grade: number): Observable<Teacher[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "get_by_grade", grade: grade.toString()};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Teacher[]>(this.urlapi, options);
  }

  save(teacher: Teacher): Observable<Teacher[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "save" };
	const options = { headers, "observe?": "body", params };

	return this.http.post<Teacher[]>(this.urlapi, teacher, options);
  }

  delete(ref: string, grade_ref: string): Observable<Teacher[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "teacher", action: "delete", ref: ref, grade_ref: grade_ref };
	const options = { headers, "observe?": "body", params };

	return this.http.get<Teacher[]>(this.urlapi,  options);
  }

}
