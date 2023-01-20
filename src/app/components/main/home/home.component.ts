import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // carouselItems = 'Mi lista';
  carouselItems: any[] = [
    {
      category: 'Mi lista',
      videos: [
        {
          cover: './assets/carousel_movies/one_piece.jpg',
          title: 'One Piece',
          description: '1999 12+ 24 minutos',
        },
        {
          cover: './assets/carousel_movies/naruto.jpg',
          title: 'Naruto Shippuden',
          description: '2007 12+ 24 minutos',
        },
      ],
    },
    {
      category: 'Tendencias',
    },
    {
      category: 'Originales de Platzi Video',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
