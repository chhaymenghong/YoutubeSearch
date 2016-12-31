import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';

// service
import { SearchService } from './search.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchResultListComponent,
    SearchBoxComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
