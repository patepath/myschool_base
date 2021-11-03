import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Opt, StudentRegister } from '../school';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})

export class StudentRegisterService {

  //public url = 'http://localhost:8080/register';
  //public url = 'https://localhost/api/register';
  public url = 'https://www.webappmyschool.com/api/register';

  constructor(private http: HttpClient) { }

  public getProvinces(): Observable<Opt[]> {

		const params = { service: "province"};
		const options = { "observe?": "events", params };

    return this.http.get<Opt[]>(this.url, options);
  }

  public getEducations(): Observable<Opt[]> {

		const params = { service: "education"};
		const options = { "observe?": "body", params };

    return this.http.get<Opt[]>(this.url, options);
  }

  public getReligion(): Observable<Opt[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "religion"};
		const options = { headers, "observe?": "body", params };

    return this.http.get<Opt[]>(this.url, options);
  }

  public getBloodGroup(): Observable<Opt[]> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "bloodgroup"};
		const options = { headers, "observe?": "body", params };

    return this.http.get<Opt[]>(this.url, options);
  }

  getStudentByIdcard(idcard: string): Observable<StudentRegister> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "querystudent", idcard: idcard };
		const options = { headers, "observe?": "body", params };

    return this.http.get<StudentRegister>(this.url, options); 
  }

  save(studentReg: StudentRegister): Observable<any> {

		const headers =  new HttpHeaders({ 
			'Content-Type': 'application/json'
		});

		const params = { service: "studentreg" };
		const options = { headers, "observe?": "body", params };

    return this.http.post<any>(this.url, studentReg, options); 
  } 
}
