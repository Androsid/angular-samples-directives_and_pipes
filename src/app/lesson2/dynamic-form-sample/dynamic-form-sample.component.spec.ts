import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSampleComponent } from './dynamic-form-sample.component';

describe('DynamicFormSampleComponent', () => {
  let component: DynamicFormSampleComponent;
  let fixture: ComponentFixture<DynamicFormSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
