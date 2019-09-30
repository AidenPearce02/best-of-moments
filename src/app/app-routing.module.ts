import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/pages/index/index.component';
import { AnimeComponent } from './components/pages/anime/anime.component';
import { GamesComponent } from './components/pages/games/games.component';
import { SerialsComponent } from './components/pages/serials/serials.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'anime', component: AnimeComponent},
    {path: 'games', component: GamesComponent},
    {path: 'serials', component: SerialsComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
