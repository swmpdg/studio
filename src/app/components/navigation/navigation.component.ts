import { Component, Input } from "@angular/core";

import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: [ "./navigation.component.scss" ]
})
export class NavigationComponent extends BaseComponent {
  @Input("icon-base-class")
  public iconBaseClass = "mdi";
  @Input("items")
  public items: NavigationItem[];
}

/** Provides the available signature for navigation items */
export interface NavigationItem {
  /**
   * Gets or sets the item type for this item. There are two types available:
   *  1. group: Requires the links property to be defined
   *  2. link:  Requires the link_url and icon_class properties to be defined
   */
  type: "group" | "link";
  /** Gets or sets the label for this item */
  label: string;

  /** Gets or sets the link url for this item */
  link_url?: string;
  /** Gets or sets the link children for this item */
  links?: NavigationItem[];
  /** Gets or sets the item class for this item */
  icon_class?: string;
}
