import { Component, Input } from "@angular/core";

@Component({
  selector: "color-palette",
  templateUrl: "./color-palette.component.html",
  styleUrls: [ "./color-palette.component.scss" ]
})
export class ColorPaletteComponent {
  @Input() collections: Array<ICollectionColor> = [{ hex: "A63D40" }, { hex: "90A959" }, { hex: "E9B872" }];
  @Input() colorForeground: ICollectionColor = { hex: "151515" };
  @Input() colorBackground: ICollectionColor = { hex: "ffffff" };

  public constructor() {}
}

export interface ICollectionColor {
  name?: string;
  hex: string;
}
