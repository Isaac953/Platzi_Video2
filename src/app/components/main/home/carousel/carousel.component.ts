import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';

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

  @ViewChildren('carouselMove') carouselMove!: QueryList<ElementRef>;
  @ViewChild('carouselItem') carouselItem!: ElementRef;

  slideMove: any;
  carouselId: any;
  slideSize: any;

  /* Start Function onResize */
  onResize = (event: any) => {};
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = nextValue + 1;
      this.slidesCase(nextValue, id);
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = backValue - 1;
      this.slidesCase(backValue, id);
    }, 300);
  };
  /* End Function back move Slide*/

  /* Start Function limitSum */
  limitSum = (clickSum: number, id: any) => {
    switch (true) {
      case clickSum >= this.carouselMovies[id].videos.length:
        clickSum = this.carouselMovies[id].videos.length;
        console.log(clickSum);
        break;
      case clickSum === 1:
        clickSum = 1;
        console.log(clickSum);
        break;
    }
  };
  /* End Function limitSum */

  /* Start Function dots move Slide */
  slidesCase = (clickSum: number, id: any) => {
    this.limitSum(clickSum, id);
    this.slideSize = this.carouselItem.nativeElement.offsetWidth + 10;
    this.slideMove = this.slideSize * clickSum;
    this.carouselId = this.carouselMove.toArray()[id].nativeElement;
    this.carouselId.scrollTo({
      left: this.slideMove,
    });
  };
  /* End Function dots move Slide */

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this.carouselMove);
  }
}
