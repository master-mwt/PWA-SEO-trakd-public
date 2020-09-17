import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { ExploreComponent } from './components/pages/explore/explore.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SeasonComponent } from './components/pages/season/season.component';
import { CollectionComponent } from './components/pages/collection/collection.component';
import { EpisodeComponent } from './components/pages/episode/episode.component';
import { BackupComponent } from './components/pages/backup/backup.component';
import { GenresComponent } from './components/pages/genres/genres.component';
import { InfoComponent } from './components/pages/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExploreComponent,
    NotfoundComponent,
    DetailsComponent,
    SearchComponent,
    SeasonComponent,
    CollectionComponent,
    EpisodeComponent,
    BackupComponent,
    GenresComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
