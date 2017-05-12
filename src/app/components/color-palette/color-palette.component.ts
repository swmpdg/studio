import { Component, Input } from "@angular/core";

@Component({
  selector: "color-palette",
  templateUrl: "./color-palette.component.html",
  styleUrls: [ "./color-palette.component.scss" ]
})
export class ColorPaletteComponent {
  @Input() collections: Array<ICollectionColor> = [{ hex: "ff0000" }, { hex: "00ff00" }, { hex: "0000ff" }];
  @Input() colorForeground: ICollectionColor = { hex: "1a1a1a" };
  @Input() colorBackground: ICollectionColor = { hex: "ffffff" };

  public constructor() {}
}

export interface ICollectionColor {
  name?: string;
  hex: string;
}
