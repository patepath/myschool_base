import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Employee } from '../school'
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public urlapi: string;

  constructor(public config: ConfigService, public http: HttpClient) {

    this.urlapi = this.config.getURL();

  }

  get(): Observable<Employee[]> {
    
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "employee", action: "get" };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Employee[]>(this.urlapi, options);
  }

  save(employee: Employee): Observable<Employee[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "employee", action: "save" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Employee[]>(this.urlapi, employee, options);
  }

}
