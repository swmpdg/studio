import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";
import { DragDirective } from "../drag/drag.directive";

@Directive({ selector: "[drop]" })
export class DropDirective {
  /** Gets the selector for the directive class declaration */
  public static readonly SELECTOR = "[drop]";

  @Output()
  public drop: EventEmitter<DragEvent> = new EventEmitter();

  public constructor(protected elementRef: ElementRef) { }

  /** Gets the native element held by the element reference dependency */
  protected get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }

  @HostListener("dragover", [ "$event" ])
  protected onDragOver(e: DragEvent) {
    e.preventDefault();

    this.nativeElement.classList.add(DragDirective.STATES.dragover);
  }

  @HostListener("dragleave")
  protected onDragLeave() {
    this.nativeElement.classList.remove(DragDirective.STATES.dragover);
  }

  @HostListener("drop", [ "$event" ])
  protected onDrop(e: DragEvent) {
    this.nativeElement.classList.remove(DragDirective.STATES.dragover);
    // The emit is currently throwing a range (call stack) error. This is a known issue #4...
    // Take a look at: https://github.com/vandalsquad/studio/issues/4
    // this.drop.emit(e);
  }
}
