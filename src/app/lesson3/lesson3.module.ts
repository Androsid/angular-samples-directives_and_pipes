import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { IntroModule } from './01-intro/intro.module';
import { CreateModule } from './02-create/create.module';
import { ObservableSamplesModule } from './03-observable-samples/observable-samples.module';
import { ServiceModule } from './04-service/service.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    IntroModule,
    CreateModule,
    ObservableSamplesModule,
    ServiceModule
  ]
})
export class Lesson3Module { }
