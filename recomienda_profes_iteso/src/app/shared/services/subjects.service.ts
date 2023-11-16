import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  private teachersUrl: string = 'http://localhost:3000/teachers';

  constructor(private http: HttpClient) {}

  getSubjectsFromTeacher(teacherID: any): any {}
}
