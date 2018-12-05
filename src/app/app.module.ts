import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectivesModule } from './01-attribute-directives/attribute-directives.module';
import { StructuralDirectivesModule } from './02-structural-directives/structural-directives.module';
import { PipesModule } from './03-pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttributeDirectivesModule,
    StructuralDirectivesModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
