import { Injectable } from "@angular/core";

@Injectable()
export class Context {
  public name: string;
  public crumbs: Array<string>;
  public frameClass: string;
  public isLoading: boolean;

  public constructor() {
    // Default context values...
    this.name = "Studio";
    this.crumbs = [ "Workspace" ];
    this.frameClass = "frame-white";
    this.isLoading = true;
  }
}
