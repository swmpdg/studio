import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Account } from "app/services/account/account.service";
import { Context } from "app/services/context/context.service";
import { Locale } from "app/services/locale/locale.service";
import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  public static readonly RESOURCE_URL = "/assets/lang/{locale}/common.json";

  public constructor(
    protected locale: Locale,
    protected account: Account,
    protected context: Context,
    protected router: Router
  ) {
    super();

    this.locale.origin(AppComponent.RESOURCE_URL).subscribe();
  }

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
  }
  public ngOnDestroy() {
    this.locale.dispose(AppComponent.RESOURCE_URL).subscribe();
  }
}
