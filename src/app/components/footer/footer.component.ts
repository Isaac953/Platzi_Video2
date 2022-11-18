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

  constructor() {}

  ngOnInit(): void {}
}
