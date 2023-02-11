import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

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

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  dotClass = 'active-dot';

  dotsCarousels = [];
  numbers: any;

  /* Start Function onResize */
  onResize = (event: any) => {
    for (let i = 0; i < this.carouselMove.length; i++) {
      console.log( this.carouselMovies[i].videos.length);
    }
    this.numberSlides();
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = this.carouselMovies[id].sum + nextValue;
      this.slideSize = this.carouselItem.nativeElement.offsetWidth + 20;
      this.carouselId = this.carouselMove.toArray()[id].nativeElement;
      this.slideMove = this.slideSize * this.carouselMovies[id].sum;
      this.carouselId.scrollTo({
        left: this.slideMove,
      });
      console.log(this.slideMove);
      // this.slidesCase(nextValue, id);
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = this.carouselMovies[id].sum - backValue;
      this.slideSize = this.carouselItem.nativeElement.offsetWidth + 20;
      this.carouselId = this.carouselMove.toArray()[id].nativeElement;
      this.slideMove = this.slideSize * this.carouselMovies[id].sum;
      this.carouselId.scrollTo({
        left: this.slideMove,
      });
      console.log(this.slideMove);
      // this.slidesCase(backValue, id);
    }, 300);
  };
  /* End Function back move Slide*/

  /* Start Function number Slides */
  numberSlides = () => {

    for (let i = 0; i < this.carouselMove.length; i++) {
      switch (true) {
        case this.carouselMovies[i].videos.length <= 5:
          this.carouselMovies[i].numberSlide = 1;
          this.numbers = Array(this.carouselMovies[i].numberSlide).fill(0).map((x,i)=>i);
          break;
        case this.carouselMovies[i].videos.length > 5 && this.carouselMovies[i].videos.length <= 10:
          this.carouselMovies[i].numberSlide = 2;
          this.numbers = Array(this.carouselMovies[i].numberSlide).fill(0).map((x,i)=>i);
          break;
          case this.carouselMovies[i].videos.length > 10:
            this.carouselMovies[i].numberSlide = 3;
            this.numbers = Array(this.carouselMovies[i].numberSlide).fill(0).map((x,i)=>i);
            break;
      }
    }
  };
  /* End Function number Slides */

    /* Start Function dots move Slide */
    buttonSlide = (buttonValue: number, id: any) => {
      setTimeout(() => {
        this.carouselMovies[id].sum = buttonValue;
        this.slideSize = this.carouselItem.nativeElement.offsetWidth + 20;
        this.carouselId = this.carouselMove.toArray()[id].nativeElement;
        this.slideMove = this.slideSize * this.carouselMovies[id].sum;
        this.carouselId.scrollTo({
          left: this.slideMove,
        });
      }, 300);
    };
    /* End Function dots move Slide */

  /* Start Function limitSum */
  // limitSum = (clickSum: number, id: any) => {
  //   switch (true) {
  //     case clickSum >= this.carouselMovies[id].videos.length:
  //       clickSum = this.carouselMovies[id].videos.length;
  //       break;
  //     case clickSum === 1:
  //       clickSum = 1;
  //       break;
  //   }
  // };
  /* End Function limitSum */

  /* Start Function dots move Slide */
  // slidesCase = (clickSum: number, id: any) => {
  //   this.limitSum(clickSum, id);
  //   this.slideSize = this.carouselItem.nativeElement.offsetWidth + 20;
  //   this.slideMove = this.slideSize * clickSum;
  //   console.log(this.slideMove);
  //   this.carouselId = this.carouselMove.toArray()[id].nativeElement;
  //   this.carouselId.scrollTo({
  //     left: this.slideMove,
  //   });
  // };
  /* End Function dots move Slide */

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.numberSlides();
    }, 300);
  }
}
