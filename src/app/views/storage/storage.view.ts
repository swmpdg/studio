import { Component, OnDestroy } from "@angular/core";

import { Storage } from "app/services/storage/storage.service";
import { Locale } from "app/services/locale/locale.service";
import { Context } from "../../services/context/context.service";

import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html"
})
export class StorageViewComponent extends BaseComponent implements OnDestroy {
  public constructor(
    protected storage: Storage,
    protected context: Context) {
    super();

    this.context.frameClass = "frame-dark";
    this.context.crumbs.push({ label: "storage" });
  }

  public ngOnDestroy() {
    this.context.crumbs.pop();
  }
}
