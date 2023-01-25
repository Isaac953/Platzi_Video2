import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselMovies: any;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  constructor() {}

  ngOnInit() {}
}
