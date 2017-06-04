import { Routes } from "@angular/router";

import { ArchiveViewComponent } from "app/views/archive/archive.view";
import { WorkspaceViewComponent } from "app/views/workspace/workspace.view";

export const ROUTES: Routes = [
  { path: "archive", component: ArchiveViewComponent },
  { path: "workspace", component: WorkspaceViewComponent }
];
