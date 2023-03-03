import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEpisodesComponent } from 'src/components/list-episodes/list-episodes.component';
import { SeriesComponent } from 'src/components/series/series.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent, canActivateChild: [AuthGuard], children: [
    { path: ':id', component: ListEpisodesComponent }
  ]},
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
