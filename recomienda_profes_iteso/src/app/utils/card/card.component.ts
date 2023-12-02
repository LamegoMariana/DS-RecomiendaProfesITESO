import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() score: number = 0.0;
  @Input() id: string = '';

  stars = [1, 2, 3, 4, 5]; // Number of total stars
}
