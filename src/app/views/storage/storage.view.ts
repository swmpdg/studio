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
    { name: "unique pieces", last_mod: this.now, icon: "mdi mdi-folder-outline icon-folder" },
    { name: "vandalsquad_studio_intro.vsc", last_mod: this.now, icon: "mdi mdi-note-outline" },
    { name: "piece_01.vsc", last_mod: this.now, icon: "mdi mdi-note-outline" },
    { name: "piece_02.vsc", last_mod: this.now, icon: "mdi mdi-note-outline" }
  ];

  public constructor(
    protected storage: Storage,
    protected context: Context) {
    super();

    this.context.tagClass = "tag-white";
    this.context.frameClass = "frame-primary";
    this.context.crumbs.push({ label: "storage" });
  }

  public ngOnDestroy() {
    this.context.crumbs.pop();
  }
}
