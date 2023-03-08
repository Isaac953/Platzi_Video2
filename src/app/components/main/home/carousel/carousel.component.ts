import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
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
  /* Start Variables of Carousel Component */
  @Input() carouselMovies: any;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  sizeDisplay = window.innerWidth;
  sizeCard: any;
  itemSize: any;
  numberItems: any;
  moves: any;
  carouselId: any;
  slideMove: any;

  @ViewChild('carouselItem') carouselItem!: ElementRef;
  @ViewChildren('carouselMove') carouselMove!: QueryList<ElementRef>;
  /* End Variables of Carousel Component */

  /* Start Function onResize */
  onResize = (event: any) => {
    for (let i = 0; i < this.carouselMove.length; i++) {
      this.carouselMovies[i].sum = 0;
      this.carouselMove.toArray()[i].nativeElement.scrollTo({
        left: '0px',
      });
    }

    this.displayCases();

    setTimeout(() => {
      this.clearDots();
      this.numberDots();
    }, 300);
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = this.carouselMovies[id].sum + nextValue;
      this.limitSum(id);
      this.slidesCase(id);
    }, 500);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = this.carouselMovies[id].sum - backValue;
      this.limitSum(id);
      this.slidesCase(id);
    }, 500);
  };
  /* End Function back move Slide*/

  /* Start Function dots move Slide */
  buttonSlide = (buttonValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = buttonValue;
      this.limitSum(id);
      this.slidesCase(id);
    }, 300);
  };
  /* End Function dots move Slide */

  /* Start Function slidesCase */
  slidesCase = (id: any) => {
    this.carouselId = this.carouselMove.toArray()[id].nativeElement;
    this.slideMove = this.sizeCard * this.carouselMovies[id].sum;
    this.carouselId.scrollTo({
      left: this.slideMove,
    });

    for (let j = 0; j < this.carouselMovies[id].buttons.length; j++) {
      this.carouselMovies[id].buttons[j].activeDot = '';
    }
    this.carouselMovies[id].buttons[this.carouselMovies[id].sum].activeDot =
      'active-dot';
  };
  /* End Function slidesCase */

  /* Start Function limitSum */
  limitSum = (id: any) => {
    switch (true) {
      case this.carouselMovies[id].sum >= this.carouselMovies[id].numberSlide:
        this.carouselMovies[id].sum = this.carouselMovies[id].sum - 1;
        break;
      case this.carouselMovies[id].sum === 0 || this.carouselMovies[id].sum < 0:
        this.carouselMovies[id].sum = 0;
        break;
    }
  };
  /* End Function limitSum */

  /* Start Function displayCases */
  displayCases = () => {
    setTimeout(() => {
      this.sizeDisplay = window.innerWidth;
      this.itemSize = this.carouselItem.nativeElement.offsetWidth + 15;
      switch (true) {
        case this.sizeDisplay >= 1024:
          this.sizeCard = this.itemSize * 5;
          this.moves = 5;
          this.numberSlides(this.moves);
          break;
        case this.sizeDisplay >= 768:
          this.sizeCard = this.itemSize * 4;
          this.moves = 4;
          this.numberSlides(this.moves);
          break;
        case this.sizeDisplay < 768:
          this.sizeCard = this.itemSize * 3;
          this.moves = 3;
          this.numberSlides(this.moves);
          break;
      }
    }, 300);
  };
  /* End Function displayCases*/

  /* Start Function numberSlides */
  numberSlides = (moveSlide: number) => {
    setTimeout(() => {
      for (let i = 0; i < this.carouselMove.length; i++) {
        switch (true) {
          case this.carouselMovies[i].videos.length <= moveSlide:
            this.carouselMovies[i].numberSlide = 1;
            break;
          case this.carouselMovies[i].videos.length <= moveSlide * 2:
            this.carouselMovies[i].numberSlide = 2;
            break;
          case this.carouselMovies[i].videos.length <= moveSlide * 3:
            this.carouselMovies[i].numberSlide = 3;
            break;
          case this.carouselMovies[i].videos.length <= moveSlide * 4:
            this.carouselMovies[i].numberSlide = 4;
            break;
          case this.carouselMovies[i].videos.length <= moveSlide * 5:
            this.carouselMovies[i].numberSlide = 5;
            break;
        }
      }
    }, 300);
  };
  /* End Function numberSlides*/

  /* Start Function numberDots */
  numberDots = () => {
    setTimeout(() => {
      for (let i = 0; i < this.carouselMove.length; i++) {
        for (let j = 0; j < this.carouselMovies[i].numberSlide; j++) {
          this.carouselMovies[i].buttons.push({ dot: j, activeDot: '' });
        }
        this.carouselMovies[i].buttons[this.carouselMovies[i].sum].dot = 0;
        this.carouselMovies[i].buttons[this.carouselMovies[i].sum].activeDot =
          'active-dot';
      }
    }, 300);
  };
  /* End Function numberDots*/

  /* Start Function numberDots */
  clearDots = () => {
    setTimeout(() => {
      for (let i = 0; i < this.carouselMove.length; i++) {
        for (let j = 0; j <= this.carouselMovies[i].numberSlide; j++) {
          this.carouselMovies[i].buttons.pop({ dot: j, activeDot: '' });
        }
      }
    }, 300);
  };
  /* End Function numberDots*/

  constructor() {}

  ngOnInit() {
    this.displayCases();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.numberDots();
      this.displayCases();
    }, 300);
  }
}
