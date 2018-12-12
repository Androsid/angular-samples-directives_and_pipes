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
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson3Module } from './lesson3/lesson3.module';
import { Lesson4Component } from './lesson4/lesson4.component';
import { ChangeDetectionModule } from './lesson4/01-change-detection/change-detection.module';
import { CdStrategiesModule } from './lesson4/02-cd-strategies/cd-strategies.module';
import { DoCheckSampleModule } from './lesson4/03-do-check-sample/do-check-sample.module';
import { ImmutablejsModule } from './lesson4/04-immutablejs/immutablejs.module';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    DragNDropComponent,
    Lesson3Component,
    Lesson4Component
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
    AutocompleteModule,
    Lesson3Module,
    ChangeDetectionModule,
    CdStrategiesModule,
    DoCheckSampleModule,
    ImmutablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
