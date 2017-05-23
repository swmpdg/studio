import { Directive, ElementRef, HostListener } from "@angular/core";

import { DropDirective } from "app/directives/drop/drop.directive";

@Directive({ selector: "[drag]" })
export class DragDirective {
  /** Gets the selector for the directive class declaration */
  public static readonly SELECTOR = "[drag]";

  private _nativeClones: HTMLElement[] = [];

  public constructor(protected elementRef: ElementRef) { }

  /** Gets the native element held by the element reference dependency */
  protected get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }
  /** Gets the available drop parents inside the dom */
  protected get dropParents(): HTMLElement[] {
    return Array.from(document.querySelectorAll(DropDirective.SELECTOR)) as Array<HTMLElement>;
  }

  @HostListener("dragstart", [ "$event" ])
  protected onDragStart(e: DragEvent) {
    // Attach the dropfocus class to the available drop parents inside the dom...
    this.dropParents.forEach(parent => {
      parent.classList.add("dropfocus");

      // Get the native clones count...
      const cloneCount = this._nativeClones.push(this.nativeElement.cloneNode(true) as HTMLElement);
      const clone = this._nativeClones[cloneCount - 1];

      parent.appendChild(clone);
    });
  }

  @HostListener("dragend", [ "$event" ])
  protected onDragEnd(e: DragEvent) {
    this._nativeClones.map(clone => clone.remove());
    // Attach the dropfocus class to the available drop parents inside the dom...
    this.dropParents.forEach(parent => parent.classList.remove("dropfocus"));
  }
}
