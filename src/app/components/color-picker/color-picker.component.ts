import { Component, Input } from "@angular/core";
import { Color } from "app/core/color";

@Component({
  selector: "color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: [ "./color-picker.component.scss" ]
})
export class ColorPickerComponent {
  @Input() color: Color = Color.parse("#ffffff");

  public constructor() { }
}
