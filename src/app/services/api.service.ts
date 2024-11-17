import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../models/event.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://your-server-url.com/api';

  constructor(private http: HttpClient) {}

  sendEventData(eventData: Event): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/events`, eventData, { headers });
  }
}
