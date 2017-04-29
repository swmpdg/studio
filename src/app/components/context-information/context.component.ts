import { Component } from "@angular/core";
import { Context } from "../../services/context/context.service";

@Component({
  selector: "context-information",
  templateUrl: "./context.component.html",
  styleUrls: [ "./context.component.scss" ]
})
export class ContextInformationComponent {
  public constructor(protected context: Context) { }
}
