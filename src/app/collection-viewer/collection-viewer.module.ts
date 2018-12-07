import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CollectionViewerComponent } from "./collection-viewer.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ScrollingModule
    ],
    declarations: [
        CollectionViewerComponent
    ]
})
export class CollectionViewerModule { }
