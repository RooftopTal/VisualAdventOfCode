import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environment';
import { AOCResponse } from './aoc-response';


@Injectable({
  providedIn: 'root',
})
export class AOCService {
  constructor(private http: HttpClient) { }

  getAOCAnswer(path: string): Observable<HttpResponse<AOCResponse>> {
    return this.http.get<AOCResponse>(
      environment.apiUrl + ':' + environment.apiPort + '/' + path, { observe: 'response' });
  }
}
