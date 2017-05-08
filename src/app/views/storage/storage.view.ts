import { Component } from "@angular/core";

import { Storage } from "app/services/storage/storage.service";
import { Locale } from "app/services/locale/locale.service";
import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html"
})
export class StorageViewComponent extends BaseComponent {
  public constructor(
    protected locale: Locale,
    protected storage: Storage
  ) {
    super();

    this.locale.merge("/assets/lang/{locale}/storage.json");
  }
}
