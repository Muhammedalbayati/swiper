import { Component, OnInit, ViewChild } from '@angular/core';


import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];


  constructor() { }


  ngOnInit() {

  }


  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1.16,
    spaceBetween: 4,
    centeredSlides: true,
    observer: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    loop: true,
    navigation: false,
    pagination: false,
    autoplay: {
      delay: 1000
    },
    speed: 1000,
    watchOverflow: true,
    // watchSlidesProgress: true


  };



}