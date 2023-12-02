import { Component } from '@angular/core';

import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {
  options: FormGroup;

  constructor(fb: FormBuilder, private location: Location) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  goBack() {
    this.location.back();
  }

  selectedStars: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  selectStar(star: number): void {
    this.selectedStars = star;
  }

}
