import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Trakd');
    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }

  ngOnInit(): void {}
}
