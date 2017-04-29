import { Component } from "@angular/core";

import { Account } from "../../services/account/account.service";

@Component({
  selector: "account-information",
  templateUrl: "./account.component.html",
  styleUrls: [ "./account.component.scss" ]
})
export class AccountInformationComponent {
  public constructor(protected account: Account) { }
}
