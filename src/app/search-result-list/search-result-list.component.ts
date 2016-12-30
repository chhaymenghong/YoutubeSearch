import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs';
import { SearchResult } from '../search-result.state';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  host: { class : 'ui centered grid' },
  providers: []
})
export class SearchResultListComponent implements OnInit {
  public result$: Observable<SearchResult>;

  constructor() { }

  ngOnInit() {
    // initialize result$ observable to one from service
  }

}
