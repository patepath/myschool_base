import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public urlapi: string;

  constructor(public config: ConfigService, public http: HttpClient) { 
    this.urlapi = config.getURL()
  }

  get(): Observable<Subject[]> {
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set("service",  "subject")
    .set("action" , "get");

    const options = { headers, params };

    return this.http.get<Subject[]>(this.urlapi, options);
  }

  getByGroup(group_ref: string): Observable<Subject[]> {
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set("service",  "subject")
    .set("action" , "get_by_group")
    .set('group_ref', group_ref);

    const options = { headers, params };

    return this.http.get<Subject[]>(this.urlapi, options);
  }

  getByGradeGroup(grade_ref: string, group_ref: string): Observable<Subject[]> {
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set("service",  "subject")
    .set("action" , "get_by_grade_group")
    .set('grade_ref', grade_ref)
    .set('group_ref', group_ref);

    const options = { headers, params };

    return this.http.get<Subject[]>(this.urlapi, options);
  }

  save(subject: Subject): Observable<Subject[]> {
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set("service",  "subject")
    .set("action" , "save");

    const options = { headers, params };

    return this.http.post<Subject[]>(this.urlapi, subject, options);
  }

  del(subject: Subject): Observable<Subject[]> {
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json'
    });

    const params = new HttpParams()
    .set("service",  "subject")
    .set("action" , "del");

    const options = { headers, params };

    return this.http.post<Subject[]>(this.urlapi, subject, options);
  }

}

export interface Subject {
  Ref:  number;
  GroupRef: number;
  GroupName: string;
  GradeRef: number;
  GradeName: string;
  Code: string;
  Name: string;
}
