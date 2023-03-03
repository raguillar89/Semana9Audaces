import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  movies = [{
    id: 1,
    nome: 'Titanic',
    duracao: 3,
  },
  {
    id: 2,
    nome: 'Forest Gump',
    duracao: 2,
  },
  {
    id: 3,
    nome: 'Titanic',
    duracao: 3,
  }];
}
