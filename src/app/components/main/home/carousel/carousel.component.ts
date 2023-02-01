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
  slideMove: any;
  carouselId: any;
  carouselSize: any;
  itemSize: any;
  clickSum = 0;
  clickMove = 0;

  @ViewChildren('carouselMove') carouselMove!: QueryList<ElementRef>;
  @ViewChild('carouselItem') carouselItem!: ElementRef;

  /* Start Function onResize */
  onResize = (event: any) => {
    for (let i = 0; i < 3; i++) {
      this.carouselId =
        this.carouselMove.toArray()[i].nativeElement.offsetWidth;
    }
    this.itemSize = this.carouselItem.nativeElement.offsetWidth;
    console.log(this.itemSize + 10);
  };
  /* End Function onResize */

  /* Start Function next move Slide */
  nextSlide = (btnid: string, nextValue: number, cell: any) => {
    this.carouselSize =
      this.carouselMove.toArray()[cell].nativeElement.offsetWidth;
    this.itemSize = this.carouselItem.nativeElement.offsetWidth + 10;

    // this.clickSum = this.clickSum + nextValue;

    this.clickSum = this.clickSum + nextValue;
    this.clickMove = this.clickMove + nextValue;

    this.slideMove = this.itemSize * this.clickMove;
    this.carouselId = this.carouselMove.toArray()[cell].nativeElement;

    this.carouselId.scrollTo({
      left: this.slideMove,
    });

    console.log(this.clickMove);
    console.log(this.slideMove);
  };
  /* End Function next move Slide*/

  /* Start Function next move Slide */
  backSlide = (btnid: string, backValue: number, cell: any) => {};
  /* End Function next move Slide*/

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this.carouselMove);
  }
}
