import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Registration1Component } from './01_registration/registration.component';
import { Registration2Component } from './02_registration/registration.component';
import { Registration3Component } from './03_registration/registration.component';
import { Registration4Component } from './04_registration/registration.component';
import { Registration5Component } from './05_registration/registration.component';
import { Registration6Component } from './06_customValidator/registration.component';
import { Registration7Component } from './07_asyncValidator/registration.component';
import { Registration8Component } from './08_asyncValidatorDep/registration.component';

@NgModule({
  declarations: [
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    Registration5Component,
    Registration6Component,
    Registration7Component,
    Registration8Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class Lesson2Module { }
