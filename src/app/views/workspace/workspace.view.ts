import { Component, OnDestroy } from "@angular/core";

import { BaseComponent } from "../../core/base-component";
import { Locale } from "../../services/locale/locale.service";

@Component({
  selector: "workspace-view",
  templateUrl: "./workspace.view.html",
  styleUrls: [ "./workspace.view.scss" ]
})
export class WorkspaceViewComponent extends BaseComponent implements OnDestroy {
  public static readonly RESOURCE_URL = "/assets/lang/{locale}/workspace.json";

  public constructor(protected locale: Locale) {
    super();

    this.locale.merge(WorkspaceViewComponent.RESOURCE_URL).subscribe();
  }

  public ngOnDestroy() {
    this.locale.dispose(WorkspaceViewComponent.RESOURCE_URL).subscribe();
  }
}
