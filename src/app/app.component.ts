import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "app/services/account/account.service";
import { ContextService } from "app/services/context/context.service";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit {
  public constructor(
    protected account: AccountService,
    protected context: ContextService,
    protected router: Router
  ) {}

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
  }
}
