import { Component, OnDestroy } from "@angular/core";

import { Storage } from "app/services/storage/storage.service";
import { Locale } from "app/services/locale/locale.service";
import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html"
})
export class StorageViewComponent extends BaseComponent implements OnDestroy {
  public static readonly RESOURCE_URL = "/assets/lang/{locale}/storage.json";

  public constructor(
    protected locale: Locale,
    protected storage: Storage
  ) {
    super();

    this.locale.merge(StorageViewComponent.RESOURCE_URL).subscribe();
  }

  public ngOnDestroy() {
    this.locale.dispose(StorageViewComponent.RESOURCE_URL).subscribe();
  }
}
