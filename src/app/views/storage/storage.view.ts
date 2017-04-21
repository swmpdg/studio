import { Component } from "@angular/core";

import { StorageService } from "app/services/storage/storage.service";

@Component({
  selector: "storage-view",
  templateUrl: "./storage.view.html"
})
export class StorageViewComponent {
  public constructor(
    protected storage: StorageService
  ) {}
}
