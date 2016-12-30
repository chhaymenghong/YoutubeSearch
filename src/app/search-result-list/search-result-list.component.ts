import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs';
import { SearchResult } from '../search-result.state';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  host: { class : 'ui centered grid' },
  providers: [ SearchService ]
})
export class SearchResultListComponent implements OnInit {
  public result$: Observable<SearchResult[]>;

  constructor( private searchService: SearchService ) {
    this.result$ = searchService.bs;
  }

  ngOnInit() {
    this.searchService.getVideos('cat');
  }

}
