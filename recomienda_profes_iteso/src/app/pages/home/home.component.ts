import { Component } from '@angular/core';
import { TeachersService } from '../../shared/services/teachers.service';
import { Teacher } from '../../shared/interfaces/teacher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  teachers$: any;

  constructor(private teacherService: TeachersService) {}

  getTeachers(): void {
    this.teachers$ = this.teacherService.getTeachers();
  }

  ngOnInit(): void {
    this.getTeachers();
  }
}
