import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from '../services/config.service';
import { Title } from '../school';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

	public urlapi: string;

	constructor(  
		private http: HttpClient,
		private config: ConfigService) { 

		this.urlapi = config.getURL();
	}

	get(): Observable<Title[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "title", action: "1"};
		const options = { headers, "observe?": "body", params};

		return this.http.get<Title[]>(this.urlapi, options);
	}
	
	save(title: Title): Observable<Title[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "title", action: "2"};
		const options = { headers, "observe?": "body", params};

		return this.http.post<Title[]>(this.urlapi, title, options);
	}

}
