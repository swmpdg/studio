import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Context } from "app/services/context/context.service";
import { Locale } from "app/services/locale/locale.service";
import { BaseComponent } from "app/core/base-component";
import { Repository } from "./services/repository/repository.service";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  public static readonly RESOURCE_URL = "/assets/lang/{locale}/common.json";

  public constructor(
    protected locale: Locale,
    protected repository: Repository,
    protected context: Context,
    protected router: Router
  ) {
    super();

    this.locale.origin(AppComponent.RESOURCE_URL).subscribe();
  }

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
    this.repository.getCommitHistory().subscribe();
  }
  public ngOnDestroy() {
    this.locale.dispose(AppComponent.RESOURCE_URL).subscribe();
  }
}
