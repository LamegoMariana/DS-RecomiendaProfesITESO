import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.scss'
})
export class MateriasComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  isDisliked = false;

  toggleDislike() {
    this.isDisliked = !this.isDisliked;
  }

}
