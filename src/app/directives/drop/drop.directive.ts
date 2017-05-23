import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { DragDirective } from "../drag/drag.directive";

@Directive({ selector: "[drop]" })
export class DropDirective {
  /** Gets the selector for the directive class declaration */
  public static readonly SELECTOR = "[drop]";

  public constructor(protected elementRef: ElementRef) { }

  /** Gets the native element held by the element reference dependency */
  protected get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }

  // Todo: dropfocus
  // This states appearance is currently held by the "app.component.scss" file. Future implementations should target a
  // cleaner categorization for the related styles...
}
