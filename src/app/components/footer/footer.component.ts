import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  nameRoute: any;

  footerNavs: any[] = [
    {
      option: 'Terminos de uso',
      url: '/maintenance',
    },
    {
      option: 'Declaración de privacidad',
      url: '/maintenance',
    },
    {
      option: 'Centro de ayuda',
      url: '/maintenance',
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
