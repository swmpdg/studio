import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Http } from "@angular/http";

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

  private _latestGitCommit = "loading...";

  public constructor(
    protected locale: Locale,
    protected account: Account,
    protected context: Context,
    protected router: Router,
    protected http: Http
  ) {
    super();

    this.locale.origin(AppComponent.RESOURCE_URL).subscribe();
  }

  /** Gets the pushed github sha value for the latest commit */
  public get latestGitCommit() {
    return this._latestGitCommit;
  }

  public ngOnInit() {
    this.router.navigate([ "/workspace" ]);

    this.http.get("https://api.github.com/repos/vandalsquad/studio/commits")
      .map(response => response.json())
      .subscribe(body => this._latestGitCommit = body[0]["commit"]);
  }
  public ngOnDestroy() {
    this.locale.dispose(AppComponent.RESOURCE_URL).subscribe();
  }
}
