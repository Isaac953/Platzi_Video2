import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Platzi_Video2';
  heightMain: any;

  routeLocationOrigin = window.location.pathname;
  routeLoactionSearch = this.routeLocationOrigin.lastIndexOf('/');
  routeLocation = this.routeLocationOrigin.slice(this.routeLoactionSearch);

  /* Start Function to assign Background for the Components */
  heightMainSize = () => {
    switch (true) {
      case this.routeLocation == '/home':
        this.heightMain = 'vh-home';
        break;
      case this.routeLocation == '/sign-in':
        this.heightMain = 'vh-sign-in';
        break;
      case this.routeLocation == '/login':
        this.heightMain = 'vh-login';
        break;
      case this.routeLocation == '/error-404':
        this.heightMain = 'vh-error-404';
        break;
        case this.routeLocation == '/maintenance':
          this.heightMain = 'vh-maintenance';
          break;
      default:
        this.heightMain = 'vh-home';
        break;
    }
  };
  /* End Function to assign Background for the Components */

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.heightMainSize();

    /* Start Change value routeLoaction for the Service */
    this.routeService.route$.subscribe((nameRoute) => {
      this.routeLocation = nameRoute;
      this.heightMainSize();
    });
    /* End Change value routeLoaction for the Service */
  }
}
