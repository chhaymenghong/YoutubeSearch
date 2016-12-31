import { Component, OnInit, ElementRef } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],

})
export class SearchBoxComponent implements OnInit {
  public loading : Observable<boolean>;
  constructor( private searchService : SearchService,
    private elementRef: ElementRef ) {
    this.loading = searchService.loading;
  }

  ngOnInit() {
    Observable.fromEvent( this.elementRef.nativeElement, 'keyup' )
              .map( ( event : any ) => event.target.value )
              .debounceTime(1000)
              .distinctUntilChanged()
              .filter( query => query.length > 0)
              .subscribe( query => this.searchService.getVideos( query ) );

  }

}
