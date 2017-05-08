import { Component, OnInit } from "@angular/core";
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
export class AppComponent extends BaseComponent implements OnInit {
  public constructor(
    protected locale: Locale,
    protected account: Account,
    protected context: Context,
    protected router: Router
  ) {
    super();

    this.locale.origin("/assets/lang/{locale}/common.json");
  }

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
  }
}
