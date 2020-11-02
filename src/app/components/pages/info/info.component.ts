import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  private langChangeSubscription: any;

  constructor(
    private title: Title,
    private translate: TranslateService,
    private meta: Meta
  ) {
    this.setTitleAndDescription();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.setTitleAndDescription();
      }
    );
  }

  private setTitleAndDescription() {
    if (this.translate.currentLang === 'it') {
      this.title.setTitle(
        'Trakd: applicazione gratis che ti permette di seguire le tue serie tv preferite, scoprirne di nuove e restare aggiornati sulle prossime uscite'
      );
      this.meta.updateTag({
        name: 'description',
        content: `Trakd ${this.translate.instant('info_text_p1')} ${this.translate.instant('info_text_p2_1')} collezione${this.translate.instant('info_text_p2_2')} ${this.translate.instant('info_text_p3_1')} backup ${this.translate.instant('info_text_p3_2')} naviga ${this.translate.instant('info_text_p4_1')} cerca ${this.translate.instant('info_text_p4_2')} ${this.translate.instant('info_text_p5_1')} TMDb ${this.translate.instant('info_text_p5_2')}`,
      });
    } else {
      this.title.setTitle(
        'Trakd: free application that allows you to track your favourites tvshows, find new ones and stay up to date on upcoming releases'
      );
      this.meta.updateTag({
        name: 'description',
        content: `Trakd ${this.translate.instant('info_text_p1')} ${this.translate.instant('info_text_p2_1')} collection${this.translate.instant('info_text_p2_2')} ${this.translate.instant('info_text_p3_1')} backup ${this.translate.instant('info_text_p3_2')} browse ${this.translate.instant('info_text_p4_1')} find ${this.translate.instant('info_text_p4_2')} ${this.translate.instant('info_text_p5_1')} TMDb ${this.translate.instant('info_text_p5_2')}`,
      });
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe();
  }
}
