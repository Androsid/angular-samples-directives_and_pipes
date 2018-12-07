import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DragNDropCustomPreviewComponent } from './drag-n-drop-custom-preview/drag-n-drop-custom-preview.component';
import { DragNDropTodoComponent } from './drag-n-drop-todo/drag-n-drop-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  declarations: [
    
    DragNDropCustomPreviewComponent,
    
    DragNDropTodoComponent]
})
export class DragNDropModule { }
