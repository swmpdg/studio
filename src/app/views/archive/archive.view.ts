import { Component, OnDestroy } from "@angular/core";

import { Archive } from "app/services/archive/archive.service";
import { Context } from "../../services/context/context.service";

import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "storage-view",
  templateUrl: "./archive.view.html",
  styleUrls: [ "./archive.view.scss" ]
})
export class ArchiveViewComponent extends BaseComponent implements OnDestroy {
  protected currentPath = "";

  public constructor(
    protected archive: Archive,
    protected context: Context) {
    super();

    this.context.tagClass = "tag-white";
    this.context.frameClass = "frame-primary";
    this.context.crumbs.push({ label: "archive" });
  }

  public ngOnDestroy() {
    this.context.crumbs.pop();
  }
}
