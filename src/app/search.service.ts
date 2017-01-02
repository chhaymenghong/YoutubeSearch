import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, URLSearchParams } from '@angular/http';
import { SearchResult } from './search-result.state';
import { environment } from '../environments/environment'


@Injectable()
export class SearchService {
  public bs: BehaviorSubject<SearchResult[]> =
    new BehaviorSubject<SearchResult[]>([]);
  public loading: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor( private http: Http ) {
  }

  getVideos( query: string ) {
    this.loading.next(true);
    let params = new URLSearchParams();
    params.set('q', query );
    params.set('key', environment.apiToken );
    params.set('part', 'snippet');
    params.set('type', 'video');
    params.set('maxResults', '50');

    this.http.get( environment.baseUrl, { search: params } )
      .map( resp => resp.json().items )
      .subscribe(
        resultsJson => {
          var searchResults: SearchResult[] = resultsJson.map( eResultJson => new SearchResult( eResultJson ) );
          this.bs.next( searchResults );
          this.loading.next( false );
        },
        err => { console.log(err); this.loading.next( false ); }
      )
  }

}
