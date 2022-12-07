import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinName = 'Regístrate';
  signinName2 = 'Registrarme';
  urlLogin = '/login';

  inputValues: any[] = [
    {
      type: 'text',
      placeholder: 'Nombre',
    },
    {
      type: 'text',
      placeholder: 'Correo',
    },
    {
      type: 'password',
      placeholder: 'Contraseña',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
