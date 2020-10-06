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
      this.translate.get('info_text').subscribe((text) => {
        this.meta.updateTag({
          name: 'description',
          content: text,
        });
      });
    } else {
      this.title.setTitle(
        'Trakd: free application that allows you to track your favourites tvshows, find new ones and stay up to date on upcoming releases'
      );
      this.translate.get('info_text').subscribe((text) => {
        this.meta.updateTag({
          name: 'description',
          content: text,
        });
      });
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langChangeSubscription.unsubscribe();
  }
}
