import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

// Services:
import { Locale } from "app/services/locale/locale.service";
import { Archive } from "app/services/archive/archive.service";
import { Context } from "app/services/context/context.service";
import { Repository } from "./services/repository/repository.service";
// Views:
import { ArchiveViewComponent } from "app/views/archive/archive.view";
import { WorkspaceViewComponent } from "app/views/workspace/workspace.view";
// Directives:
import { DropDirective } from "./directives/drop/drop.directive";
import { DragDirective } from "./directives/drag/drag.directive";
// Components:
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContextInformationComponent } from "./components/context-information/context.component";
import { ColorPaletteComponent } from "./components/color-palette/color-palette.component";
import { ColorPickerComponent } from "./components/color-picker/color-picker.component";
// Pipes:
import { LocalizationPipe } from "./pipes/l10n.pipe";

@NgModule({
  declarations: [
    AppComponent,
    // Views:
    ArchiveViewComponent,
    WorkspaceViewComponent,
    // Directives:
    DragDirective,
    DropDirective,
    // Components:
    NavigationComponent,
    ContextInformationComponent,
    ColorPaletteComponent,
    ColorPickerComponent,
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
    Context,
    Archive,
    Repository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor() { }
}
