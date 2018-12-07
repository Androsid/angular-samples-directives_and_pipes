import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectivesModule } from './lesson1/01-attribute-directives/attribute-directives.module';
import { StructuralDirectivesModule } from './lesson1/02-structural-directives/structural-directives.module';
import { PipesModule } from './lesson1/03-pipes/pipes.module';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson2Module } from './lesson2/lesson2.module';
import { DragNDropModule } from './drag-n-drop/drag-n-drop.module';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { CollectionViewerModule } from './collection-viewer/collection-viewer.module';
import { AutocompleteModule } from './lesson2/autocomplete-sample/autocomplete.module';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    DragNDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttributeDirectivesModule,
    StructuralDirectivesModule,
    PipesModule,
    Lesson2Module,
    DragNDropModule,
    CollectionViewerModule,
    AutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
