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
  @Input() carouselMovies: any;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  sizeDisplay = window.innerWidth;
  sizeCard: any;

  @ViewChild('carouselItem') carouselItem!: ElementRef;
  @ViewChildren('carouselMove') carouselMove!: QueryList<ElementRef>;
  itemSize: any;
  numberItems: any;
  moves: any;
  carouselId: any;
  slideMove: any;

  /* Start Function onResize */
  onResize = (event: any) => {
    this.displayCases();
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (nextValue: number, id: any) => {
    setTimeout(() => {
      this.carouselMovies[id].sum = this.carouselMovies[id].sum + nextValue;
      this.carouselId = this.carouselMove.toArray()[id].nativeElement;
      this.slideMove = this.sizeCard * this.carouselMovies[id].sum;
      this.carouselId.scrollTo({
        left: this.slideMove,
      });
    }, 300);
  };
  /* End Function next move Slide*/

  /* Start Function back move Slide */
  backSlide = (backValue: number, id: any) => {
    this.carouselMovies[id].sum = this.carouselMovies[id].sum - backValue;
    this.carouselId = this.carouselMove.toArray()[id].nativeElement;
    this.slideMove = this.sizeCard * this.carouselMovies[id].sum;
    this.carouselId.scrollTo({
      left: this.slideMove,
    });
    setTimeout(() => {}, 300);
  };
  /* End Function back move Slide*/

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

  constructor() {}

  ngOnInit() {
      this.displayCases();
      // this.itemSize = this.carouselItem.nativeElement.offsetWidth + 15;
  }

  ngAfterViewInit() {
    setTimeout(() => {}, 300);
  }
}
