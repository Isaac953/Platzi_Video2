import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerNavs: any[] = [
    {
      option: 'Terminos de uso',
      url: '/home',
    },
    {
      option: 'Declaración de privacidad',
      url: '/home',
    },
    {
      option: 'Centro de ayuda',
      url: '/home',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
