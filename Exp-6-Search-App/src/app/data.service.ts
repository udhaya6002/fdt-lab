import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
