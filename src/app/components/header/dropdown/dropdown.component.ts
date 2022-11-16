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
      url: '#',
    },
    {
      option: 'Cerrar Sesión',
      url: '#',
    },
    {
      class: 'dropdown-divider',
    },
    {
      option: 'Registro',
      url: '#',
    },
    {
      option: 'Iniciar Sesión',
      url: '#',
    },
    {
      option: 'Error 404',
      url: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
