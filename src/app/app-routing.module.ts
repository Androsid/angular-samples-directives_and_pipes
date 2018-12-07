import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimpleDirectiveComponent } from "./lesson1/01-attribute-directives/01-simple-directive/simple-directive.component";
import { EventDirectiveComponent } from "./lesson1/01-attribute-directives/02-event-directive/event-directive.component";
import { PassingDataComponent } from "./lesson1/01-attribute-directives/03-passing-data/passing-data.component";
import { PassingFewParamsComponent } from "./lesson1/01-attribute-directives/04-passing-few-params/passing-few-params.component";
import { ConfirmSampleComponent } from "./lesson1/01-attribute-directives/05-confirm-sample/confirm-sample.component";
import { MousemoveSampleComponent } from "./lesson1/01-attribute-directives/06-mousemove-sample/mousemove-sample.component";
import { HostBindingSampleComponent } from "./lesson1/01-attribute-directives/07-host-binding-sample/host-binding-sample.component";
import { MyIfSampleComponent } from "./lesson1/02-structural-directives/01-my-if-sample/my-if-sample.component";
import { DelaySampleComponent } from "./lesson1/02-structural-directives/02-delay-sample/delay-sample.component";
import { ContextSampleComponent } from "./lesson1/02-structural-directives/03-context-sample/context-sample.component";
import { BuiltinPipesComponent } from "./lesson1/03-pipes/01-builtin-pipes/builtin-pipes.component";
import { ChainingSampleComponent } from "./lesson1/03-pipes/02-chaining-sample/chaining-sample.component";
import { AsyncPipesComponent } from "./lesson1/03-pipes/03-async-pipes/async-pipes.component";
import { AsyncObservableComponent } from "./lesson1/03-pipes/04-async-observable/async-observable.component";
import { SimplePipe1Component } from "./lesson1/03-pipes/05-simple-pipe-1/simple-pipe-1.component";
import { SimplePipe2Component } from "./lesson1/03-pipes/06-simple-pipe-2/simple-pipe-2.component";
import { PureInpureComponent } from "./lesson1/03-pipes/07-pure-inpure/pure-inpure.component";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Registration1Component } from "./lesson2/01_registration/registration.component";
import { Registration2Component } from "./lesson2/02_registration/registration.component";
import { Registration3Component } from "./lesson2/03_registration/registration.component";
import { Registration4Component } from "./lesson2/04_registration/registration.component";
import { Registration5Component } from "./lesson2/05_registration/registration.component";
import { Registration6Component } from "./lesson2/06_customValidator/registration.component";
import { Registration7Component } from "./lesson2/07_asyncValidator/registration.component";
import { Registration8Component } from "./lesson2/08_asyncValidatorDep/registration.component";
import { DragNDropComponent } from "./drag-n-drop/drag-n-drop.component";
import { DragNDropCustomPreviewComponent } from "./drag-n-drop/drag-n-drop-custom-preview/drag-n-drop-custom-preview.component";
import { DragNDropTodoComponent } from "./drag-n-drop/drag-n-drop-todo/drag-n-drop-todo.component";
import { CollectionViewerComponent } from "./collection-viewer/collection-viewer.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "lesson1" },
  {
    path: "lesson1", component: Lesson1Component, children: [
      { path: "sample1", component: SimpleDirectiveComponent },
      { path: "sample2", component: EventDirectiveComponent },
      { path: "sample3", component: PassingDataComponent },
      { path: "sample4", component: PassingFewParamsComponent },
      { path: "sample5", component: ConfirmSampleComponent },
      { path: "sample6", component: MousemoveSampleComponent },
      { path: "sample7", component: HostBindingSampleComponent },

      { path: "sample8", component: MyIfSampleComponent },
      { path: "sample9", component: DelaySampleComponent },
      { path: "sample10", component: ContextSampleComponent },

      { path: "sample11", component: BuiltinPipesComponent },
      { path: "sample12", component: ChainingSampleComponent },
      { path: "sample13", component: AsyncPipesComponent },
      { path: "sample14", component: AsyncObservableComponent },
      { path: "sample15", component: SimplePipe1Component },
      { path: "sample16", component: SimplePipe2Component },
      { path: "sample17", component: PureInpureComponent }
    ]
  },
  {
    path: "lesson2-1", component: Lesson2Component, children: [
      { path: "01_registration", component: Registration1Component },
      { path: "02_registration", component: Registration2Component },
      { path: "03_registration", component: Registration3Component },
      { path: "04_registration", component: Registration4Component },
      { path: "05_registration", component: Registration5Component },
      { path: "01_custom-validator", component: Registration6Component },
      { path: "02_custom-validator", component: Registration7Component },
      { path: "03_custom-validator", component: Registration8Component }
    ]
  },
  {
    path: "drag-n-drop", component: DragNDropComponent, children: [
      { path: "custom-preview", component: DragNDropCustomPreviewComponent },
      { path: "todo", component: DragNDropTodoComponent }
    ]
  },
  { path: "collection-viewer", component: CollectionViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
