import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result.state';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  inputs: ['searchResult']
})
export class SearchResultComponent implements OnInit {
  public searchResult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
