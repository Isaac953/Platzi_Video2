import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // carouselItems = 'Mi lista';
  buttonsCarousel: any[] = [
    {
      source: './assets/carousel_movies/play_icon.png',
      alt: 'Play',
    },
    {
      source: './assets/carousel_movies/plus_icon.png',
      alt: 'Plus',
    },
  ];
  carouselItems: any[] = [
    {
      category: 'Mi lista',
      btn1: 'L1',
      btn2: 'R1',
      id: 0,
      sum: 0,
      videos: [
        {
          cover: './assets/carousel_movies/one_piece.jpg',
          title: 'One Piece (+1000 episodios)',
          description: '1999 12+ 24 minutos',
          buttons: this.buttonsCarousel,
          class: 'marginstart',
        },
        {
          cover: './assets/carousel_movies/naruto.jpg',
          title: 'Naruto Shippuden (700 episodios)',
          description: '2007 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/bleach.jpg',
          title: 'Bleach (600 episodios)',
          description: '2004 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/one_piece.jpg',
          title: 'One Piece',
          description: '1999 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/naruto.jpg',
          title: 'Naruto Shippuden',
          description: '2007 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/one_piece.jpg',
          title: 'One Piece',
          description: '1999 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/naruto.jpg',
          title: 'Naruto Shippuden',
          description: '2007 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/one_piece.jpg',
          title: 'One Piece',
          description: '1999 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/naruto.jpg',
          title: 'Naruto Shippuden',
          description: '2007 12+ 24 minutos',
          buttons: this.buttonsCarousel,
          class: 'marginlast',
        },
      ],
    },
    // {
    //   category: 'Tendencias',
    //   btn1: 'L2',
    //   btn2: 'R2',
    //   id: 1,
    //   sum: 1,
    //   videos: [
    //     {
    //       cover: './assets/carousel_movies/bosque_autos.jpg',
    //       title: 'Bosque con autos',
    //       description: '2021 12+ 114 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/hora_celebrar.jpg',
    //       title: 'Hora de celebrar',
    //       description: '2021 18+ 150 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/naruto.jpg',
    //       title: 'Naruto Shippuden',
    //       description: '2007 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/naruto.jpg',
    //       title: 'Naruto Shippuden',
    //       description: '2007 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //       class: 'marginlast',
    //     },
    //   ],
    // },
    // {
    //   category: 'Originales de Platzi Video',
    //   btn1: 'L3',
    //   btn2: 'R3',
    //   id: 2,
    //   sum: 1,
    //   videos: [
    //     {
    //       cover: './assets/carousel_movies/noche_reflexionar.jpg',
    //       title: 'Noche para reflexionar',
    //       description: '2021 12+ 114 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/bello_atardecer.jpg',
    //       title: 'Bello atardecer',
    //       description: '2021 18+ 160 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/naruto.jpg',
    //       title: 'Naruto Shippuden',
    //       description: '2007 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //     },
    //     {
    //       cover: './assets/carousel_movies/one_piece.jpg',
    //       title: 'One Piece',
    //       description: '1999 12+ 24 minutos',
    //       buttons: this.buttonsCarousel,
    //       class: 'marginlast',
    //     },
    //   ],
    // },
  ];

  constructor() {}

  ngOnInit() {}
}
