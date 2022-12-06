import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoClick = '/home';

  /* Start Function Send Route in MainContent */
  clickRoute = () => {
    this.routeService.route$.emit(this.logoClick);
    window.scrollTo(0, 0);
  };
  /* End Function Send Route in MainContent */

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {}
}
