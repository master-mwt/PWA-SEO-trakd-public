import { Component, OnInit } from '@angular/core';
import {
  faBars as faSBars,
  faCompass as faSCompass,
  faSearch as faSSearch,
  faHeart as faSHeart,
  faSave as faSSave,
  faInfoCircle as faSInfoCircle,
  faUserCircle as faSUserCircle,
  faTrophy as faSTrophy,
  faStar as faSStar,
  faTh as faSTh,
  faThList as faSThList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //icons
  faSCompass = faSCompass;
  faSSearch = faSSearch;
  faSHeart = faSHeart;
  faSBars = faSBars;
  faSSave = faSSave;
  faSInfoCircle = faSInfoCircle;
  faSUserCircle = faSUserCircle;
  faSTrophy = faSTrophy;
  faSStar = faSStar;
  faSTh = faSTh;
  faSThList = faSThList;

  constructor() {}

  ngOnInit(): void {}
}
