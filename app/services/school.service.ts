import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Opt } from '../school';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {

	constructor() { }
}
