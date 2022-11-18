import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  imgProfile = './assets/logo/user_icon.png';
  profile = 'Perfil';
  altname = 'User';
  profileNavs: any[] = [
    {
      option: 'Cuenta',
      url: '/home',
    },
    {
      option: 'Cerrar Sesión',
      url: '/home',
    },
    {
      class: 'dropdown-divider',
    },
    {
      option: 'Registro',
      url: '/sign-in',
    },
    {
      option: 'Iniciar Sesión',
      url: '/login',
    },
    {
      option: 'Error 404',
      url: '/error-404',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
