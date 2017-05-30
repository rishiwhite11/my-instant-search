import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from "./search.service";
import { HideElementDirective } from './hide-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HideElementDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
