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
      sum: 0,
      numberSlide: 0,
      id: 0,
      buttons: [
        // {dot: 1, activeDot: 'active-dot'}
      ],
      videos: [
        {
          cover: './assets/carousel_movies/mi_lista/bleach.jpg',
          title: 'Bleach (378 episodios)',
          description: 'En emision 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/one_piece.jpg',
          title: 'One Piece (+1050 episodios)',
          description: '1999 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/naruto.jpg',
          title: 'Naruto Shippuden (700 episodios)',
          description: '2007-2017 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/ao_no_exorcist.jpg',
          title: 'Ao no Exorcist (37 episodios)',
          description: '2011-2017 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/demon_slayer.JPG',
          title: 'Kimetsu no Yaiba (26 episodios)',
          description: '2019 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/dragon_ball_super.jpg',
          title: 'Dragon Ball Super (131 episodios)',
          description: '2015-2018 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/inuyasha.JPG',
          title: 'Inuyasha (193 episodios)',
          description: '2002-2010 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/fairy_tail.jpg',
          title: 'Fairy Tail (175 episodios)',
          description: '2009-2012 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/mi_lista/sgk_1.JPG',
          title: 'Shingeki no Kyojin (25 episodios)',
          description: '2013 12+ 24 minutos',
          buttons: this.buttonsCarousel,
        },
      ],
    },
    {
      category: 'Tendencias',
      sum: 0,
      numberSlide: 0,
      id: 1,
      buttons: [
        // {dot: 1, activeDot: 'active-dot'}
      ],
      videos: [
        {
          cover: './assets/carousel_movies/tendencias/avengers.jpg',
          title: 'Los Vengadores',
          description: '2012 18+ 143 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/tendencias/spiderman_3.JPG',
          title: 'Spider-Man: sin camino a casa',
          description: '2021 18+ 148 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/tendencias/top_gun.JPG',
          title: 'Top Gun: Maverick',
          description: '2022 18+ 130 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/tendencias/ant_man3.jpg',
          title: 'Ant-Man and the Wasp: Quantumania',
          description: '2023 18+ 123 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/tendencias/fast_furious_9.JPG',
          title: 'Rápidos y furiosos 9',
          description: '2021 18+ 143 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/tendencias/thor_3.jpg',
          title: 'Thor: Ragnarok',
          description: '2017 18+ 130 minutos',
          buttons: this.buttonsCarousel,
        },
      ],
    },
    {
      category: 'Originales de Platzi Video',
      sum: 0,
      numberSlide: 0,
      id: 2,
      buttons: [
        // {dot: 1, activeDot: 'active-dot'}
      ],
      videos: [
        {
          cover: './assets/carousel_movies/originales_platzi/city_2.jpg',
          title: 'Conociendo la Ciudad',
          description: '2023 12+ 90 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/originales_platzi/noche_reflexionar.jpg',
          title: 'Noche para reflexionar',
          description: '2021 12+ 114 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/originales_platzi/bello_atardecer.jpg',
          title: 'Bello atardecer',
          description: '2021 18+ 160 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/originales_platzi/bosque_autos.jpg',
          title: 'Bosque con autos',
          description: '2021 12+ 114 minutos',
          buttons: this.buttonsCarousel,
        },
        {
          cover: './assets/carousel_movies/originales_platzi/hora_celebrar.jpg',
          title: 'Hora de celebrar',
          description: '2021 18+ 150 minutos',
          buttons: this.buttonsCarousel,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
