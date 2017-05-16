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
  public static readonly RESOURCE_URL = "/assets/lang/{locale}/workspace.json";

  public constructor(
    protected locale: Locale,
    protected context: Context) {
    super();

    this.locale.merge(WorkspaceViewComponent.RESOURCE_URL).subscribe();
    this.context.crumbs.push({ label: "workspace" });
  }

  public ngOnDestroy() {
    this.locale.dispose(WorkspaceViewComponent.RESOURCE_URL).subscribe();
    this.context.crumbs.pop();
  }
}
