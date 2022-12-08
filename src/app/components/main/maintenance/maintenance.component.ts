import { Component, OnInit } from '@angular/core';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  /* Start Font Awesome icons*/
  faPenRuler = faPenRuler;
  /* End Font Awesome icons*/

  constructor() {}

  ngOnInit(): void {}
}
