import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { Room } from '../school';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

	private urlapi: string;

	constructor(
		private http: HttpClient,
		private config: ConfigService) {
		
		this.urlapi = config.getURL();
	}

	get(): Observable<Room[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "room", action: "1" };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Room[]>(this.urlapi, options);
	}

	getByRef(ref: string): Observable<Room> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "room", action: "get_by_ref", ref: ref };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Room>(this.urlapi, options);
	}

	getByGrade(gradeRef: number): Observable<Room[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "room", action: "3", grade_ref: String(gradeRef) };
		const options = { headers, "observe?": "body", params };

		return this.http.get<Room[]>(this.urlapi, options);
	}

	save(classroom: Room): Observable<Room[]> {
		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "room", action: "2" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Room[]>(this.urlapi, classroom, options);

	}

	remove(room: Room): Observable<Room[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "room", action: "4" };
		const options = { headers, "observe?": "body", params };

		return this.http.post<Room[]>(this.urlapi, room, options);
	}
}
