import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class CheckinsubjectService {
	public urlapi: string;

	constructor(public config: ConfigService, public http: HttpClient) {
		this.urlapi = config.getURL();
	}
	
	checkDuplicate(created: string, period: string, room_ref: string): Observable<any> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "check_duplicate")
		.set("created" , created)
		.set("period" , period)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<any[]>(this.urlapi, options);
	}

	get(created: string, room_ref: string): Observable<CheckinStudent[]> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "get")
		.set("created" , created)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<CheckinStudent[]>(this.urlapi, options);
	}

	getByKey(created: string, period: string, room_ref: string): Observable<CheckinSubject> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "get_by_key")
		.set("created" , created)
		.set("period" , period)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<CheckinSubject>(this.urlapi, options);
	}

	getStatusNormal(created: string, room_ref: string): Observable<CheckinStudent> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "get_status_normal")
		.set("created" , created)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<CheckinStudent>(this.urlapi, options);
	}

	getStatusAbsent(created: string, room_ref: string): Observable<CheckinStudent> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "get_status_absent")
		.set("created" , created)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<CheckinStudent>(this.urlapi, options);
	}

	save(checkinsubject: CheckinSubject): Observable<any>{
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "save");

		const options = { headers, params };

		return this.http.post<any>(this.urlapi, checkinsubject, options);
	}

	change(created: string, period: string, room_ref: string, checkinsubject: CheckinSubject):Observable<any> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "change")
		.set("created" , created)
		.set("period" , period)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.post<any>(this.urlapi, checkinsubject, options);
	}

	update(checkinsubject: CheckinSubject):Observable<any> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "update");

		const options = { headers, params };

		return this.http.post<any>(this.urlapi, checkinsubject, options);
	}

	delete(created: string, period: string, room_ref: string): Observable<any> {
		const headers =  new HttpHeaders() 
		.set('Content-Type', 'application/json')

		const params = new HttpParams()
		.set("service",  "checkinsubject")
		.set("action" , "delete")
		.set("created" , created)
		.set("period" , period)
		.set("room_ref" , room_ref);

		const options = { headers, params };

		return this.http.get<any[]>(this.urlapi, options);
	}
}

export interface CheckinStudent {
	Ref:      number,
	No:       number,
	Code:     string,
	FullName: string,
	P1:       string,
	P2:       string,
	P3:       string,
	P4:       string,
	P5:       string,
	P6:       string,
	P7:       string,
	P8:       string,
	P9:       string,
	P10:      string,
}

export interface CheckinSubjectStudent {
	StudentRef:      number,
	StudentCode:     string,
	StudentNo:       number,
	StudentFullName: string,
	StatusNo:        number,
	StatusName:      string,
}

export interface CheckinSubject {
	Created:     		string,
	Period:      		number,
	RoomRef:     		number,
	RoomName:    		string,
	GradeRef:    		number,
	GradeName:   		string,
	TeacherRef:  		number,
	TeacherFullName: 	string, 
	SubjectGroupRef:	number,
	SubjectGroupName:	string,
	SubjectRef:  		number,
	SubjectName: 		string,
	Students:    		CheckinSubjectStudent[],
}
