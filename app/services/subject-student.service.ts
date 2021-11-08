import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from '../services/config.service';
@Injectable({
  providedIn: 'root'
})
export class SubjectStudentService {
	public urlapi: string;

  constructor(public config: ConfigService, public http: HttpClient) { 
    this.urlapi = config.getURL();
  }

  get(yearedu: string, grade_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "get")
		.set("yearedu" , yearedu)
		.set("grade_ref" , grade_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  getByRoom(yearedu: string, room_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "get_by_room")
		.set("yearedu" , yearedu)
		.set("room_ref" , room_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  insertAllGrade(yearedu: string, grade_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "insert_all_grade")
		.set("yearedu" , yearedu)
		.set("grade_ref" , grade_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  deleteAllGrade(yearedu: string, grade_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "delete_all_grade")
		.set("yearedu" , yearedu)
		.set("grade_ref" , grade_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  insertByRoom(yearedu: string, room_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "insert_by_room")
		.set("yearedu" , yearedu)
		.set("room_ref" , room_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  deleteByRoom(yearedu: string, room_ref: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "delete_by_room")
		.set("yearedu" , yearedu)
		.set("room_ref" , room_ref)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  insertByCode(yearedu: string, student_code: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "insert_by_code")
		.set("yearedu" , yearedu)
		.set("student_code" , student_code)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }

  deleteByCode(yearedu: string, student_code: string, subject_ref: string): Observable<SubejectStudent[]> {
    const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "subjectstudent")
		.set("action" , "delete_by_code")
		.set("yearedu" , yearedu)
		.set("student_code" , student_code)
		.set("subject_ref" , subject_ref);

		const options = { headers, params };

		return this.http.get<SubejectStudent[]>(this.urlapi, options);
  }
}

export interface SubejectStudent {
  YearEdu: number,
  GradeRef: number,
  GradeName: string,
  RoomRef: number,
  RoomName: string,
  SubjectGroupRef: number;
  SubjectGroupName: string;
  SubjectRef: number,
  SubjectName: string,
  StudentRef: number,
  StudentCode: string,
  StudentName: string,
  CanExam: boolean,
  Point: number,
  Gpa: number,
}
