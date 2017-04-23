import { Injectable } from "@angular/core";

@Injectable()
export class ContextService {
  public name: string;
  public crumbs: Array<string>;
  public frameClass: string;

  public constructor() {
    // Default context values...
    this.name = "Studio";
    this.crumbs = [ "Workspace" ];
    this.frameClass = "frame-white";
  }
}
