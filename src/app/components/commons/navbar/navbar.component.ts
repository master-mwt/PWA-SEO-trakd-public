import { Component, Inject, OnInit } from '@angular/core';
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
  faFlag as faSFlag,
  faLink as faSLink,
  faExternalLinkAlt as faSExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';

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
  faSFlag = faSFlag;
  faSLink = faSLink;
  faSExternalLinkAlt = faSExternalLinkAlt;

  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta
  ) {
    translate.addLangs(['en', 'it']);
    translate.use(translate.getBrowserLang() === 'it' ? 'it' : 'en');
    this.document.documentElement.lang =
      translate.currentLang === 'it' ? 'it' : 'en';

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.translate.currentLang === 'it') {
        this.meta.updateTag({
          name: 'keywords',
          content: 'serie tv, telefilm, trakd, esplora, scopri, trova, cerca, popolari, più votati, stagione, episodio'
        });
      } else {
        this.meta.updateTag({
          name: 'keywords',
          content: 'tv show, tv series, trakd, explore, discover, find, search, popular, top rated, season, episode'
        });
      }
    });
  }

  ngOnInit(): void {}

  switchLang(lang: string) {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
  }
}
