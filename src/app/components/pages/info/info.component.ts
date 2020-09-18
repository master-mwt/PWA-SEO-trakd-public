import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle(
      'Trakd: free application that allows you to track your favourites tvshows'
    );
  }

  ngOnInit(): void {}
}
