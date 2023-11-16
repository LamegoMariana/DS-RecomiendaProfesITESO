import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  // URL to web api
  private teachersUrl: string = 'http://localhost:3000/teachers';
  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }
}
