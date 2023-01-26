import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class CarouselComponent implements OnInit {
  @Input() carouselMovies: any;

  clickSum = 1;
  clickMove = 0;

  slideMove: any;
  slidesLength: any;
  slideSize: any;
  itemSize: any;

  @ViewChild('carouselMove')
  carouselMove!: ElementRef;

  /* Start Function onResize */
  onResize = (event: any) => {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
    this.slideMove = this.slideSize * this.clickMove;
    console.log(this.itemSize);
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum + nextValue;
      this.clickMove = this.clickMove + nextValue;
      this.slidesCase();
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number) => {
    setTimeout(() => {
      this.clickSum = this.clickSum - backValue;
      this.clickMove = this.clickMove - backValue;
      this.slidesCase();
    }, 300);
  };
  /* End Function back move Slide */

  /* Start Function dots move Slide */
  slidesCase = () => {
    this.limitSum();
    this.slideMove = this.slideSize * this.clickMove;
    this.carouselMove.nativeElement.scrollTo({
      left: this.slideMove,
    });
    console.log(this.slideMove);
  };
  /* End Function dots move Slide */

  /* Start Function limitSum */
  limitSum = () => {
    switch (true) {
      case this.clickSum > this.slidesLength:
        this.clickSum = this.slidesLength;
        this.clickMove = this.slidesLength - 1;
        break;
      case this.clickSum === 0:
        this.clickSum = 1;
        this.clickMove = 0;
        break;
    }
  };
  /* End Function limitSum */

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.slideSize = this.carouselMove.nativeElement.offsetWidth;
  }
}
