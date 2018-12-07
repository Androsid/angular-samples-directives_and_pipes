import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompleteHostComponent } from './autocomplete/autocomplete-host.component';
import { AutocompleteSampleComponent } from './autocomplete-sample.component';

@NgModule({
  declarations: [
    AutocompleteSampleComponent,
    AutocompleteComponent,
    AutocompleteHostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "autocomplete", component: AutocompleteHostComponent }
    ])
  ]
})
export class AutocompleteModule { }
