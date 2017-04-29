import { Component } from "@angular/core";

import { Storage } from "app/services/storage/storage.service";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html"
})
export class StorageViewComponent {
  public constructor(
    protected storage: Storage
  ) {}
}
