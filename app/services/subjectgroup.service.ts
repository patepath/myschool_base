import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectgroupService {

  public urlapi: string;

  constructor(public config: ConfigService, public http: HttpClient) { 
    this.urlapi = config.getURL();
  }

  get():Observable<SubjectGroup[]> {
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = new HttpParams()
	.set("service",  "subjectgroup")
	.set("action" , "get");

    const options = { headers, params };
	return this.http.get<SubjectGroup[]>(this.urlapi, options);
  }

  save(subjectgroup: SubjectGroup): Observable<SubjectGroup[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "subjectgroup")
		.set("action" , "save");

    const options = { headers, params };
		return this.http.put<SubjectGroup[]>(this.urlapi, subjectgroup, options);
  }

  del(subjectgroup: SubjectGroup): Observable<SubjectGroup[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = new HttpParams()
		.set("service",  "subjectgroup")
		.set("action" , "del");

    const options = { headers, params };
		return this.http.put<SubjectGroup[]>(this.urlapi, subjectgroup, options);
  }

}

export interface SubjectGroup {
  Ref:  number,
  Name: string,
}
