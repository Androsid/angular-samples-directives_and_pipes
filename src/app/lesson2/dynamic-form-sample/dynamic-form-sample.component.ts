import { Component } from "@angular/core";
import { FormsService } from "./shared/forms.service";
import { ElementBase } from "./model/element-base";

@Component({
  selector: 'app-dynamic-form-sample',
  templateUrl: './dynamic-form-sample.component.html',
  styleUrls: ['./dynamic-form-sample.component.css'],
  providers: [FormsService]
})
export class DynamicFormSampleComponent {

  title = "app";
  elements: ElementBase<any>[];

  constructor(private fs: FormsService) {
    this.elements = fs.getElements();
  }

}
