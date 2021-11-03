import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { SDQ } from '../school';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root'
})
export class SdqService {

	private urlapi: string;

  constructor(
    public http: HttpClient, 
    public config: ConfigService) { 

    this.urlapi = config.getURL();
  }

  search(code: string): Observable<Student> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "sdq", action: "get_student_by_code", code: code};
		const options = { headers, "observe?": "body", params };

		return this.http.get<Student>(this.urlapi, options);
  }

  getbycode(code: string, type: number): Observable<SDQ> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "sdq", action: "get_by_code", code: code, type: type.toString()};
		const options = { headers, "observe?": "body", params };

		return this.http.get<SDQ>(this.urlapi, options);
  }

  save(sdq: SDQ) : Observable<Msg> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "sdq", action: "save"};
		const options = { headers, "observe?": "body", params };

		return this.http.post<Msg>(this.urlapi, sdq, options);
  }

}

export interface Msg {
  Result: boolean;
}

export interface Student {
  Code: string,
  Fullname: string,
  Grade: string,
  Room: string,
  No: number,
}