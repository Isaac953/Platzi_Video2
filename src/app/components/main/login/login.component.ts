import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginName = 'Inicia sesión';
  checkboxValue = 'Recuérdame';
  forgetPassword = 'Olvidé mi contraseña';
  neverAccount = 'No tienes ninguna cuenta';
  signin = 'Registrate';
  urlSignin = '/sign-in';
  urlMaintenance = '/maintenance';

  inputValues: any[] = [
    {
      type: 'text',
      placeholder: 'Correo',
    },
    {
      type: 'password',
      placeholder: 'Contraseña',
    },
  ];

  socialMedias: any [] = [
    {
      login: 'Inicia sesión con Google',
      logo: './assets/icons/google-icon.webp',
      alt: 'Google',
    },
    {
      login: 'Inicia sesión con Twitter',
      logo: './assets/icons/twitter-icon.webp',
      alt: 'Twitter',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
