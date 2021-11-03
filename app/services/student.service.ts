import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Student, Opt } from '../school';
import { ConfigService } from './config.service';
import { convertCompilerOptionsFromJson } from 'typescript';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

	private urlapi: string;

	constructor(private http: HttpClient, private config: ConfigService) { 
		this.urlapi = config.getURL();
	}

	public get(grade: number, room: number, txtsearch: string): Observable<Student[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "get", grade: String(grade), room: String(room), txtsearch: txtsearch };
		const options = { headers, "observe?": "body", params };
		  
		return this.http.get<Student[]>(this.urlapi, options);
	}

	public save(student: Student): Observable<Student[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "2" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Student[]>(this.urlapi, student, options);
	}

	public delete(ref: string): Observable<Student[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "delete", ref: ref };
		const options = { headers, "observe?": "body", params };
		  
		return this.http.get<Student[]>(this.urlapi, options);
	}

	public getByRef(ref: string): Observable<Student> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "get_by_ref", ref: ref };
		const options = { headers, "observe?": "body", params };
		  
		return this.http.get<Student>(this.urlapi, options);
	}

	public getByCode(code: string): Observable<Student> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "3", code: code };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Student>(this.urlapi, options);
	}

	public getByParent(parentref: number): Observable<Student[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "student", action: "4", parentref: String(parentref) };
		const options = { headers, "observe?": "body", params };
		  
		return this.http.get<Student[]>(this.urlapi, options);
	}

	public getFaceImg(student: Student) {

		let code = student.Code;

		return this.http.get(this.urlapi + '?service=student&action=get_faceimg&code=' + code, { responseType: "text" } );
	}

	public getFaceImgByCode(code: string) {
		return this.http.get(this.urlapi + '?service=student&action=7&code=' + code, { responseType: "text" } );
	}
}
