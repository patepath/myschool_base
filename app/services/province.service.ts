import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from '../services/config.service';
import { Province } from '../school';

@Injectable({
  providedIn: 'root'
})

export class ProvinceService {

	public urlapi: string;

	constructor(
		private http: HttpClient,
		private config: ConfigService) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<Province[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "province", action: "1"};
		const options = { headers, "observe?": "body", params};

		return this.http.get<Province[]>(this.urlapi, options);
	}
  
	save(province: Province): Observable<Province[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "province", action: "2"};
		const options = { headers, "observe?": "body", params };
		
		return this.http.post<Province[]>(this.urlapi, province, options);
	}
}
