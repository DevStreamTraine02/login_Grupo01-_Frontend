import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): void {
    // Aquí puedes implementar la lógica de autenticación
    alert(`Usuario: ${username}, Contraseña: ${password}`);
  }

  loginWithMicrosoft(message: string): void {
    // Aquí puedes implementar la lógica de autenticación con Microsoft
    alert(message);
  }

}
