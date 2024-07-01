import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AuthService } from '../services/auth.service';  // Asegúrate de ajustar la ruta según tu estructura de proyecto


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService) { }

  onLogin(): void {
    if(this.username == "" || this.password == ""){
      alert("Ingrese usuario y contraseña")
      return;
    }
    this.authService.login(this.username, this.password);
  }

  onMicrosoftLogin(): void {
    this.authService.loginWithMicrosoft('Has accedido con Microsoft.');
  }
}
