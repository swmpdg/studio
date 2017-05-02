import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Account } from "app/services/account/account.service";
import { Context } from "app/services/context/context.service";
import { VisualComponent } from "./cores/visual-component";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent extends VisualComponent implements OnInit {
  public constructor(
    protected account: Account,
    protected context: Context,
    protected router: Router
  ) { super(); }

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);
  }
}
