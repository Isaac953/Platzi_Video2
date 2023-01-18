import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  carouselItems: any[] = [
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
    {
      cover: './assets/carousel_movies/one_piece.jpg',
      url: '/maintenance',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
