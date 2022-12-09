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
export class WindowService {
  constructor(private http: HttpClient) { }

  getAOCAnswer(path: string): Observable<AOCResponse> {
    const fullPath = environment.apiUrl + ':' + environment.apiPort + '/' + path;
    return this.http.get<AOCResponse>(fullPath, { observe: 'body' });
  }
}
