import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

// Services:
import { Account } from "app/services/account/account.service";
import { StorageService } from "app/services/storage/storage.service";
import { Context } from "app/services/context/context.service";
// Views:
import { StorageViewComponent } from "app/views/storage/storage.view";
import { WorkspaceViewComponent } from "app/views/workspace/workspace.view";

@NgModule({
  declarations: [
    AppComponent,
    // Views:
    StorageViewComponent,
    WorkspaceViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Account,
    Context,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
