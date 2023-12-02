import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TeachersService } from '../../shared/services/teachers.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss',
})
export class ProfessorComponent implements OnInit {
  teacher$: Observable<any> = new Observable<any>(); // Initialize in the constructor
  id: any = '';
  stars = [1, 2, 3, 4, 5]; // Number of total stars

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private teachersService: TeachersService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.teacher$ = this.teachersService.getTeacher(this.id);
  }

  parseScore(score: any) {
    return parseFloat(score);
  }

  goBack() {
    this.location.back();
  }
}
