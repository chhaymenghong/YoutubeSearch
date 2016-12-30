import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, URLSearchParams } from '@angular/http';
import { SearchResult } from './search-result.state';
import { environment } from '../environments/environment'


@Injectable()
export class SearchService {
  public bs: BehaviorSubject<SearchResult[]> =
    new BehaviorSubject<SearchResult[]>([]);

  constructor( private http: Http ) {
  }

  getVideos( query: string ) {
    let params = new URLSearchParams();
    params.set('q', query );
    params.set('key', environment.apiToken );
    params.set('part', 'snippet');
    params.set('type', 'video');
    params.set('maxResults', '10');

    this.http.get( environment.baseUrl, { search: params } )
      .do( resp => console.log( resp ) )
      .do( resp => console.log( resp.json() ) )
      .map( resp => resp.json().items )
      .subscribe( resultsJson => {
        var searchResults: SearchResult[] = resultsJson.map( eResultJson => new SearchResult( eResultJson ) );
        this.bs.next( searchResults );
      } )
  }

}
