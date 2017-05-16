import { Injectable } from "@angular/core";

import { IContextCrumb } from "./context.typings";

@Injectable()
export class Context {
  /**
   * Gets or sets the name for the active context
   * @deprecated
   */
  public name: string;
  /** Gets or sets the bread crumbs for the active context */
  public crumbs: Array<IContextCrumb>;
  /** Gets or sets the frame class for the active context */
  public frameClass: string;
  /** Gets or sets whether the current context is blocked by some loading or not */
  public isLoading: boolean;

  public constructor() {
    // Default context values...
    this.name = "Studio";
    this.crumbs = [{ label: "studio" }] as Array<IContextCrumb>;
    this.frameClass = "frame-white";
    this.isLoading = false;
  }
}
