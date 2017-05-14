import { Component, Input } from "@angular/core";
import { Color } from "app/core/color";

@Component({
  selector: "color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: [ "./color-picker.component.scss" ]
})
export class ColorPickerComponent {
  /** Gets or sets the selected color for the color picker component. Defaults to white */
  @Input() color: Color = Color.parse("#ffffff");
}
