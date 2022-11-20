import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  nameError = '404';
  descriptionError = 'Página no encontrada';

  constructor() { }

  ngOnInit(): void {
  }

}
