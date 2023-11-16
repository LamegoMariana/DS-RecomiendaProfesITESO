import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss'
})
export class ProfessorComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
