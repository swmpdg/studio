import { Component, Input, OnInit } from "@angular/core";

import { Context } from "../../services/context/context.service";
import { VisualAnchor, VisualComponent } from "../../cores/visual-component";

@Component({
  selector: "toolset",
  templateUrl: "./toolset.component.html",
  styleUrls: [ "./toolset.component.scss" ]
})
export class ToolsetComponent extends VisualComponent implements OnInit {
  public constructor(protected context: Context) {
    super();
  }

  public ngOnInit() {
    console.log(this.anchor);
  }
}
