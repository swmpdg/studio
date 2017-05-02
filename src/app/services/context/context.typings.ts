import { Context } from "./context.service";

export interface IContextTool {
  name: string;
  toolClass: string;

  onActivation(event: Event, context: Context): void;
  onDeactivation(event: Event, context: Context): void;
  onPending(event: Event, context: Context): void;
}
