import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service'
import { Department } from '../school';


@Injectable({
  providedIn: 'root'
})
export class DeptService {

  public urlapi: string;

  constructor(
    public config: ConfigService,
    public http: HttpClient
   ) { 

    this.urlapi = config.getURL();

  }

  get(): Observable<Department[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "department", action: "get" };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Department[]>(this.urlapi,  options);
  }

  save(dept: Department): Observable<Department[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "department", action: "save" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Department[]>(this.urlapi, dept, options);
  }

  delete(ref: string) {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "department", action: "delete" , ref: ref};
		const options = { headers, "observe?": "body", params };

		return this.http.get<Department[]>(this.urlapi, options);
  }
}
