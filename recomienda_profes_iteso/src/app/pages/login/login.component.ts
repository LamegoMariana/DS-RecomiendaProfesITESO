import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  submitForm(login: any) {
    if (login.valid) {
      this.router.navigate(['/home']);
    }
  }
  constructor(private router: Router) {}
}
