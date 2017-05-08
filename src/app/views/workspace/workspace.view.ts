import { Component } from "@angular/core";

import { BaseComponent } from "../../core/base-component";
import { Locale } from "../../services/locale/locale.service";

@Component({
  selector: "workspace-view",
  templateUrl: "./workspace.view.html",
  styleUrls: [ "./workspace.view.scss" ]
})
export class WorkspaceViewComponent extends BaseComponent {
  public constructor(protected locale: Locale) {
    super();

    this.locale.merge("/assets/lang/{locale}/workspace.json");
  }
}
