import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselMovies: any;

  constructor() {}

  ngOnInit() {}
}
