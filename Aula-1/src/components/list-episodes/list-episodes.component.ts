import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent {
  @Input() seriesList: any[] = [];
}
