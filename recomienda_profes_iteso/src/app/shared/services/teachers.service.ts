import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getTeacher(teacherID: string): Observable<Teacher> {
    const newUrl = this.teachersUrl + `/${teacherID}`;
    return this.http.get<Teacher>(newUrl);
  }
}
