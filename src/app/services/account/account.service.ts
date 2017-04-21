import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
  public name: string;
  public imageUrl: string;
  public status: "active" | "sleeping";

  public constructor() {
    // Mocked data ahead...
    this.name = "Guest";
    this.imageUrl = null;
    this.status = "active";
  }
}
