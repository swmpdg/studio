import { Injectable } from "@angular/core";

import { IContextTool } from "./context.typings";

@Injectable()
export class Context {
  /** Gets or sets the name for the active context */
  public name: string;
  /** Gets or sets the bread crumbs for the active context */
  public crumbs: Array<string>;
  /** Gets or sets the frame class for the active context */
  public frameClass: string;
  /** Gets or sets the tool set for the active context */
  public toolSet: Array<IContextTool>;
  /** Gets or sets whether the current context is blocked by some loading or not */
  public isLoading: boolean;

  public constructor() {
    // Default context values...
    this.name = "Studio";
    this.crumbs = [ "Workspace" ];
    this.frameClass = "frame-white";
    this.isLoading = true;
    this.toolSet = [{
      // Sample context tool initialization...
      name: "HelloWorldTool",
      toolClass: "alert alert-outline",
      onActivation: (event: Event, context: Context) => {},
      onDeactivation: () => { },
      onPending: () => { }
    }];
  }
}
