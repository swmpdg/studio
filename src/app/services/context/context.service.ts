import { Injectable } from "@angular/core";

import { IContextCrumb } from "./context.typings";
import { NavigationItem } from "../../components/navigation/navigation.component";

import { NAVIGATION } from "./context.navigation";

@Injectable()
export class Context {
  /**
   * Gets or sets the organization name for the active context
   */
  public orgName: string;
  /** Gets or sets the organization url */
  public orgUrl: string;
  /** Gets or sets the bread crumbs for the active context */
  public crumbs: Array<IContextCrumb>;
  /** Gets or sets the navigation items for the active context */
  public navigation: Array<NavigationItem>;
  /** Gets or sets the frame class for the active context */
  public frameClass: string;
  /** Gets or sets the tag class for the active context */
  public tagClass: string;
  /** Gets or sets the active state for the face frame */
  public isFaceActive: boolean;
  /** Gets or sets whether the current context is blocked by some loading or not */
  public isLoading: boolean;

  public constructor() {
    // Default context values...
    this.orgName = "Vandalsquad";
    this.orgUrl = "https://vandalsquad.io";
    this.crumbs = [{ label: "studio" }] as Array<IContextCrumb>;
    this.navigation = NAVIGATION;
    this.frameClass = "frame-white";
    this.tagClass = "tag-black";
    this.isLoading = false;
    this.isFaceActive = true;
  }
}
