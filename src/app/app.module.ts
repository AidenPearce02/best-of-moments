import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AnimeComponent } from './components/pages/anime/anime.component';
import { GamesComponent } from './components/pages/games/games.component';
import { SerialsComponent } from './components/pages/serials/serials.component';
import { IndexComponent } from './components/pages/index/index.component';
import { MomentComponent } from './components/layouts/moment/moment.component';
import { MomentsComponent } from './components/layouts/moments/moments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AnimeComponent,
    GamesComponent,
    SerialsComponent,
    IndexComponent,
    MomentComponent,
    MomentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
