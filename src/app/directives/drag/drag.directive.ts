import { Directive, ElementRef, HostListener, Input } from "@angular/core";

import { DropDirective } from "app/directives/drop/drop.directive";

@Directive({ selector: "[drag]" })
export class DragDirective {
  /** Gets the selector for the directive class declaration */
  public static readonly SELECTOR = "[drag]";
  /** Gets the drag and drop state classes */
  public static readonly STATES = {
    dragging: "dragging",
    dragover: "dragover",
    dropfocus: "dropfocus"
  };

  @Input("drag-constraint")
  /** Gets or sets the constraint selector to match available drop containers */
  public dragConstraint: string;

  /**
   * Gets an array of available drop containers matching an optional constraint
   * @param {string} constraint Optional constraint selector. Only drop containers matching it will be returned
   * @returns {HTMLElement[]} The array of matched drop containers
   */
  public static getDropContainers(constraint?: string): HTMLElement[] {
    const selector = constraint ? constraint.trim() : "*";

    return Array
      .from(document.querySelectorAll(DropDirective.SELECTOR))
      .filter((container: Element) => container.matches(selector)) as HTMLElement[];
  }

  public constructor(protected elementRef: ElementRef) { }

  /** Gets the native element held by the element reference dependency */
  protected get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }
  /** Gets the related drop containers using the drag constraint input */
  protected get relatedContainers(): HTMLElement[] {
    return DragDirective.getDropContainers(this.dragConstraint);
  }

  @HostListener("dragstart", [ "$event" ])
  protected onDragStart(e: DragEvent) {
    // Attaches the dragging class to the native element...
    this.nativeElement.classList.add(DragDirective.STATES.dragging);
    // Attach the dropfocus class to the related drop containers...
    this.relatedContainers.forEach(container => container.classList.add(
      DragDirective.STATES.dropfocus
    ));
  }

  @HostListener("dragend", [ "$event" ])
  protected onDragEnd(e: DragEvent) {
    // Detaches the dragging class from the native element...
    this.nativeElement.classList.remove(DragDirective.STATES.dragging);
    // Detach the dropfocus class from the related drop containers...
    this.relatedContainers.forEach(container => container.classList.remove(
      DragDirective.STATES.dropfocus
    ));
  }
}
