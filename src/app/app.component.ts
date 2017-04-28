import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Account } from "app/services/account/account.service";
import { Context } from "app/services/context/context.service";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit {
  public constructor(
    protected account: Account,
    protected context: Context,
    protected router: Router
  ) {}

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
  }
}
