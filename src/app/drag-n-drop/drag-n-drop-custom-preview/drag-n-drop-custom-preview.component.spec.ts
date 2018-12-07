import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropCustomPreviewComponent } from './drag-n-drop-custom-preview.component';

describe('DragNDropCustomPreviewComponent', () => {
  let component: DragNDropCustomPreviewComponent;
  let fixture: ComponentFixture<DragNDropCustomPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropCustomPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropCustomPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
