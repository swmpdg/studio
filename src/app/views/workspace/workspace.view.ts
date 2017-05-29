import { Component, OnDestroy } from "@angular/core";

import { BaseComponent } from "../../core/base-component";
import { Locale } from "../../services/locale/locale.service";
import { Context } from "../../services/context/context.service";

@Component({
  selector: "workspace-view",
  templateUrl: "./workspace.view.html",
  styleUrls: [ "./workspace.view.scss" ]
})
export class WorkspaceViewComponent extends BaseComponent implements OnDestroy {
  public constructor(
    protected context: Context) {
    super();

    this.context.tagClass = "tag-black";
    this.context.frameClass = "frame-white";
    this.context.crumbs.push({ label: "workspace" });
  }

  public ngOnDestroy() {
    this.context.crumbs.pop();
  }
}
