import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

// Services:
import { Locale } from "app/services/locale/locale.service";
import { Account } from "app/services/account/account.service";
import { Storage } from "app/services/storage/storage.service";
import { Context } from "app/services/context/context.service";
import { Repository } from "./services/repository/repository.service";
// Views:
import { StorageViewComponent } from "app/views/storage/storage.view";
import { WorkspaceViewComponent } from "app/views/workspace/workspace.view";
// Components:
import { AccountInformationComponent } from "./components/account-information/account.component";
import { ContextInformationComponent } from "./components/context-information/context.component";
import { ColorPaletteComponent } from "./components/color-palette/color-palette.component";
// Pipes:
import { LocalizationPipe } from "./pipes/l10n.pipe";

@NgModule({
  declarations: [
    AppComponent,
    // Views:
    StorageViewComponent,
    WorkspaceViewComponent,
    // Components:
    AccountInformationComponent,
    ContextInformationComponent,
    ColorPaletteComponent,
    // Pipes:
    LocalizationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Locale,
    Account,
    Context,
    Storage,
    Repository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor() { }
}
