import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restore-password',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css',
})
export class RestorePasswordComponent {
  restoreForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.restoreForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  showFirstPart: boolean = true;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  showPassword3: boolean = false;

  password1 = '';
  password2 = '';
  password3 = '';


  password1Errors = {
    minLength: false,
    upperCase: false,
    number: false,
    specialChar: false
  };

  password2Errors = {
    minLength: false,
    upperCase: false,
    number: false,
    specialChar: false
  };

  password3Errors = {
    minLength: false,
    upperCase: false,
    number: false,
    specialChar: false
  };

  continue() {
    this.showFirstPart = false;
  }
  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
  }

  togglePassword3() {
    this.showPassword3 = !this.showPassword3;
  }

  validatePassword1() {
    this.password1Errors = this.getPasswordErrors(this.password1);
  }

  validatePassword2() {
    this.password2Errors = this.getPasswordErrors(this.password2);
  }

  validatePassword3() {
    this.password3Errors = this.getPasswordErrors(this.password3);
  }

  getPasswordErrors(password: string) {
    return {
      minLength: password.length < 8,
      upperCase: !/[A-Z]/.test(password),
      number: !/\d/.test(password),
      specialChar: !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  }

  isPasswordValid(errors: any) {
    return !errors.minLength && !errors.upperCase && !errors.number && !errors.specialChar;
  }

  handleSubmitEmail() {
    console.log(this.restoreForm.value);
    this.showFirstPart = false;
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.restoreForm.get(controlName)?.hasError(errorType) &&
      this.restoreForm.get(controlName)?.touched
    );
  }

  wasTouched(controlName: string) {
    return !this.restoreForm.get(controlName)?.touched;
  }
}
