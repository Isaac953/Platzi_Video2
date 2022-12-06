import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  imgProfile = './assets/logo/user_icon.png';
  profile = 'Perfil';
  altname = 'User';
  nameRoute: any;
  profileNavs: any[] = [
    {
      option: 'Cuenta',
      url: '/maintenance',
    },
    {
      option: 'Cerrar Sesión',
      url: '/maintenance',
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

  constructor(private routeService: RouteService) {}

  /* Start Function send Route in Main Content */
  clickRoute = (route: string) => {
    this.nameRoute = route;
    this.routeService.route$.emit(this.nameRoute);
    window.scrollTo(0, 0);
  };
  /* End Function send Route in Main Content */

  ngOnInit(): void {}
}
