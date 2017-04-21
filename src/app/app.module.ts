import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

import { AccountService } from "app/services/account/account.service";
import { StorageService } from "app/services/storage/storage.service";
import { StorageViewComponent } from "app/views/storage/storage.view";

@NgModule({
  declarations: [
    AppComponent,
    // Views:
    StorageViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AccountService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
