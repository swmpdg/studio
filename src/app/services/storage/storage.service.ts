import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  public pieces: Array<IStoragePiece>;
}

export interface IStoragePiece {
  name: string;
  changed: Date;
}
