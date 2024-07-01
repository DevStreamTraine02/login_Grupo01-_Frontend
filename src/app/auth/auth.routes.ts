import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { Step1Component } from './restore-password/step-1/step-1.component';
import { Step2Component } from './restore-password/step-2/step-2.component';

export const AUTH_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'restore-password',
    component: RestorePasswordComponent,
    children: [
      { path: '', component: Step1Component },
      { path: 'step-2', component: Step2Component },
    ],
  },
];
