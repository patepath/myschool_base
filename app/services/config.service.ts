import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Opt } from '../school';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

	constructor() {}

	public getAbsentPoint(): number { 
		return 5;
	}

	public getURL(): string {
		return 'https://www.myschool-sara.com/api/schoolcore';
		//return 'https://www.myschool-bangphlee.com/api/schoolcore';
		//return 'http://localhost/api/schoolcore';
		//return 'http://localhost:8080/schoolcore';
	}

	getGenders(): Observable<Opt[]> {
		return of([
			{ Value: 0, Name: "ชาย" },
			{ Value: 1, Name: "หญิง" }
		]);
	}

	getTitle(): Observable<Opt[]> {
		return of([
			{ Value: 1, Name: "นาย" },
			{ Value: 2, Name: "นาง" },
			{ Value: 3, Name: "นางสาว" },
		]);
	}
	
	getStudentTitles(): Observable<Opt[]> {
		return of([
			{ Value: 1, Name: "ดช." },
			{ Value: 2, Name: "ดญ." },
			{ Value: 3, Name: "นาย" },
			{ Value: 4, Name: "นางสาว" },
		]);
	}

	public getGrades(): Observable<Opt[]> {
		return of([
			{ Value: 0, Name: ' ไม่ระบุ ' },
			{ Value: 1, Name: 'มัธยม 1' },
			{ Value: 2, Name: 'มัธยม 2' },
			{ Value: 3, Name: 'มัธยม 3' },
			{ Value: 4, Name: 'มัธยม 4' },
			{ Value: 5, Name: 'มัธยม 5' },
			{ Value: 6, Name: 'มัธยม 6' }
		]);
	}

	public getDates(): Observable<number[]> {
		var dates = [];
		
		for(let i=1; i<=31; i++) {
			dates.push(i);
		}

		return of(dates);
	}

	public getMonths(): Observable<Opt[]> {
		return of ([
			{ Value: 1, Name: 'มกราคม'},
			{ Value: 2, Name: 'กุมภาพันธ์'},
			{ Value: 3, Name: 'มีนาคม'},
			{ Value: 4, Name: 'เมษายน'},
			{ Value: 5, Name: 'พฤษภาคม'},
			{ Value: 6, Name: 'มิถุนายน'},
			{ Value: 7, Name: 'กรกฏาคม'},
			{ Value: 8, Name: 'สิงหาคม'},
			{ Value: 9, Name: 'กันยายน'},
			{ Value: 10, Name: 'ตุลาคม'},
			{ Value: 11, Name: 'พฤศจิกายน'},
			{ Value: 12, Name: 'ธันวาคม'},
		]);
	}

	public getYears(): Observable<number[]> {
		var cur_year = new Date().getFullYear() + 543;
		var years = [];

		for(let i=0; i<10; i++) {
			years.push((cur_year - 20) +i)
		}

		return of(years);
	}

}
