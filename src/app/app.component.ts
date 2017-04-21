import { Component } from "@angular/core";

import { AccountService } from "app/services/account/account.service";

@Component({
  selector: "studio",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent {
  public constructor(
    protected account: AccountService
  ) {}
}
