/** Provides abstract base features for component inheritance */
export abstract class BaseComponent {
  /** Placeholder getter for an empty string value */
  protected get empty(): string {
    return "";
  }
  /** Placeholder function for no operation */
  protected noop(): void {
    return;
  }
}
