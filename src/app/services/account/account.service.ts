import { Injectable } from "@angular/core";

@Injectable()
export class Account {
  public name: string;
  public imageUrl: string;
  public status: "active" | "sleeping";

  public constructor() {
    // Mocked data ahead...
    this.name = "Guest";
    // this.imageUrl = "https://avatars1.githubusercontent.com/u/9396569?v=3";
    this.status = "active";
  }
}
