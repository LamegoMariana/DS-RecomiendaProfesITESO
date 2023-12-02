import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessorComponent } from './pages/professor/professor.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subject', component: MateriasComponent },
  { path: 'teachers/:id', component: ProfessorComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
