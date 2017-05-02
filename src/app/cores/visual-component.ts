import { Input } from "@angular/core";

export abstract class VisualComponent {
  @Input()
  /** Gets or sets the visual anchor flags for the visual component */
  public anchor: VisualAnchor = VisualAnchor.None;

  /**
   * Combines the given flags using the bitwise or operator
   * @param flags The flags to combine into a single expression
   * @returns The combines flag expression
   */
  public combineFlags(...flags: Array<number>) {
    return flags.reduce((prev, flag) => (prev | flag), 0);
  }
  /** Checks whether the given anchor expression relates to the component */
  public hasAnchor(anchor: VisualAnchor): boolean {
    // Validate the input anchor expression...
    return ((this.anchor & anchor) === anchor);
  }

  /** Visual anchor enumeration pointer */
  protected get VisualAnchor() {
    return VisualAnchor;
  };
  /** Placeholder function for no operation */
  protected noop(): void {
    return;
  }
}

export enum VisualAnchor {
  None   = 0,

  Top    = 1 << 0,
  Right  = 1 << 1,
  Bottom = 1 << 2,
  Left   = 1 << 3,

  Vertical   = Top | Bottom,
  Horizontal = Left | Right
}
