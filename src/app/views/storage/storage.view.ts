import { Component, OnDestroy } from "@angular/core";

import { Storage } from "app/services/storage/storage.service";
import { Context } from "../../services/context/context.service";

import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html",
  styleUrls: [ "./storage.view.scss" ]
})
export class StorageViewComponent extends BaseComponent implements OnDestroy {
  public files: any[] = [
    { name: "vandalsquad_studio_intro", ext: "vc", last_mod: this.now },
    { name: "piece_01", ext: "vc", last_mod: this.now },
    { name: "piece_02", ext: "vc", last_mod: this.now },
    { name: "some_juicy_experiments", ext: "vc", last_mod: this.now }
  ];

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
