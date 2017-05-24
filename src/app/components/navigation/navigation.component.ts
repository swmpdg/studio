import { Component } from "@angular/core";

import { BaseComponent } from "app/core/base-component";

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: [ "./navigation.component.scss" ]
})
export class NavigationComponent extends BaseComponent {
  public itemBaseClass = "mdi";
  public items: NavigationItem[] = [{
    itemClass: "mdi-brush",
    label: "Workspace"
  }, {
    itemClass: "mdi-floppy",
    label: "Storage"
  }, {
    itemClass: "mdi-bookmark-outline",
    label: "Help"
  }];
}

export interface NavigationItem {
  label: string;

  itemClass?: string;
  link?: string;
}
