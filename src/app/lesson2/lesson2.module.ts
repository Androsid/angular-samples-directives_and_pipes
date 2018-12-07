import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Registration1Component } from './01_registration/registration.component';
import { Registration2Component } from './02_registration/registration.component';
import { Registration3Component } from './03_registration/registration.component';
import { Registration4Component } from './04_registration/registration.component';
import { Registration5Component } from './05_registration/registration.component';
import { Registration6Component } from './06_customValidator/registration.component';
import { Registration7Component } from './07_asyncValidator/registration.component';
import { Registration8Component } from './08_asyncValidatorDep/registration.component';
import { DynamicFormSampleComponent } from './dynamic-form-sample/dynamic-form-sample.component';
import { DynamicFormComponent } from './dynamic-form-sample/dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './dynamic-form-sample/dynamic-form/dynamic-form-element.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    Registration5Component,
    Registration6Component,
    Registration7Component,
    Registration8Component,
    DynamicFormSampleComponent,
    DynamicFormComponent,
    DynamicFormElementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class Lesson2Module { }
