import { Component, Input } from "@angular/core";
import { Color } from "../../core/color";

@Component({
  selector: "color-palette",
  templateUrl: "./color-palette.component.html",
  styleUrls: [ "./color-palette.component.scss" ]
})
export class ColorPaletteComponent {
  @Input() activeColor: Color = Color.parse("#1a1a1a");
  @Input() collections: Array<Color> = [
    Color.parse("#2B2238"),
    Color.parse("#7CBABC"),
    Color.parse("#66CC7C"),
    Color.parse("#CC6666")
  ];
}
