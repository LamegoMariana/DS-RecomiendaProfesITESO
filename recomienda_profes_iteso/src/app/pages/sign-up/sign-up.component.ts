import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  submitForm(signUp: any) {
    if (signUp.valid) {
      this.router.navigate(['/home']);
    }
  }
  constructor(private router: Router) {}
}
