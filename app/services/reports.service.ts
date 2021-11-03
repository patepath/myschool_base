import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service'
import { ReportBehavior001, ReportStudentBehaviorPoint, ReportCheckin001, ReportCheckin002, Report004, Report005 } from '../school'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

	public urlapi: string;

  constructor(
    private http: HttpClient, 
    private config: ConfigService) {
    
	this.urlapi = this.config.getURL();
  }


  getReportBehavior001(room_ref: string): Observable<ReportBehavior001[]> {

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "report001", room_ref: room_ref };
	const options = { headers, "observe?": "body", params };

	return this.http.get<ReportBehavior001[]>(this.urlapi, options);
  }

  getReportStudentBehavior(code: string) : Observable<ReportStudentBehaviorPoint[]> {

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "report001_frm", code: code };
	const options = { headers, "observe?": "body", params };

	return this.http.get<ReportStudentBehaviorPoint[]>(this.urlapi, options);

  }

  getReportCheckin001(rptdate: string, room_ref: string): Observable<ReportCheckin001[]> {

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "checkin001", rptdate: rptdate, room_ref: room_ref };
	const options = { headers, "observe?": "body", params };

	return this.http.get<ReportCheckin001[]>(this.urlapi, options);
  }

  getReportCheckin002(rptdate: string): Observable<ReportCheckin002[]> {

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "checkin002", rptdate: rptdate};
	const options = { headers, "observe?": "body", params };

	return this.http.get<ReportCheckin002[]>(this.urlapi, options);
  }

  getReportCheckin003(rptdate: string): Observable<any[]> {

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "checkin003", rptdate: rptdate};
	const options = { headers, "observe?": "body", params };

	return this.http.get<ReportCheckin002[]>(this.urlapi, options);

  }

  getReport004(rptdate: string, room_ref: string): Observable<Report004[]> {
	  
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "report004", rptdate: rptdate, room_ref: room_ref};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Report004[]>(this.urlapi, options);
  }

  updateReport004(rptdate: string, code: string, behavior_ref: number, created: string, point: number): Observable<string> {

	const data = { Rptdate: rptdate, Code: code, Behavior_ref: behavior_ref, Created: created, Point: point };

	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "report004_frm" };
	const options = { headers, "observe?": "body", params };

	return this.http.post<string>(this.urlapi, data, options);
  }

  getReport005(monthyr: string, room_ref: string): Observable<Report005[]> {
	
	const headers =  new HttpHeaders({ 
		'Content-Type': 'application/json'
	});

	const params = { service: "report", action: "report005", monthyr: monthyr, room_ref: room_ref};
	const options = { headers, "observe?": "body", params };

	return this.http.get<Report005[]>(this.urlapi, options);
  }
}
