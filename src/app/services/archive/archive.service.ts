import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Archive {
  public items: ArchiveFile[] = [{
    lastChanged: new Date(),
    icon: "mdi mdi-note-outline",
    name: "untitled.vcs",
    data: null
  }, {
    lastChanged: new Date(),
    icon: "mdi mdi-note-outline",
    name: "untitled (1).vcs",
    data: null
  }, {
    lastChanged: new Date(),
    icon: "mdi mdi-note-outline",
    name: "untitled (2).vcs",
    path: "new folder/",
    data: null
  }];
  public storage: Storage;

  /** Gets all available paths extracted from the archive items */
  public get paths() {
    return this.items.map(item => item.path)
      .filter((path, index, paths) => paths.indexOf(path) === index);
  }

  /**
   * Resolves a path value to it's referring archive items. No path value will return the root items
   * @param {string|RegExp} [path] Optional path to use for the resolution
   * @returns {ArchiveFile[]} The resolved archive items
   */
  public getFiles(path?: string | RegExp): ArchiveFile[] {
    return path
      ? this.items.filter(item => (item.path || "").match(path))
      : this.items.filter(item => !item.path);
  }
  /**
   * Resolves a path value to it's referring archive directories. No path value will return the root directories. They
   * are represented implicitly by the available paths values
   * @param {string|RegExp} [path]      Optional path to use for the resolution
   * @param {string}        [separator] Optional separator value. Defaults to "/"
   * @returns {ArchiveDirectory[]} The resolved archive directories
   */
  public getDirectories(path?: string, separator = "/"): ArchiveDirectory[] {
    const pathAnchor = new RegExp(`^${path}\/?`, "g");

    return this.paths.map(p => {
      return {
        pathFragment: (p || "")
          .replace(pathAnchor, "")
          .split(separator)[0],
        lastChanged: this.getFiles(pathAnchor)
          .sort((a, b) => Date.parse(b.lastChanged.toString()) - Date.parse(a.lastChanged.toString()))[0].lastChanged,
        icon: "mdi mdi-folder icon-folder"
      } as ArchiveDirectory;
    }).filter(p => !!p.pathFragment.trim());
  }

  /**
   * Serializes all, a subset or a single item contained in the archive
   * @param {string|RegExp} [itemName] Optional item name or pattern
   * @returns {Observable<ArchiveFile>}
   */
  public serialize(itemName?: string | RegExp): Observable<ArchiveFile> {
    return Observable.create(observer => {
      const itemsToStore = itemName
        ? this.items.filter(item => !!item.name.match(itemName))
        : this.items;
      // Stores the desired items to the service storage provider...
      itemsToStore.forEach(item => {
        this.storage.setItem(item.name, JSON.stringify(item));
        // And yields it to the observer...
        observer.next(item);
      });
      observer.complete();
    });
  }
  /**
   * Deserializes all, a subset or a single item contained in the archive
   * @param {string|RegExp} [itemName] Optional item name or pattern
   * @returns {Observable<ArchiveFile>}
   */
  public deserialize(itemName?: string | RegExp): Observable<ArchiveFile> {
    return Observable.create(observer => {
      const storedKeys = Array(this.storage.length).map((nothing, i) => this.storage.key(i));
      const keysToRestore = itemName
        ? storedKeys.filter(key => key.match(itemName))
        : storedKeys;

      keysToRestore.forEach(key => observer.next(
        JSON.parse(this.storage.getItem(key))
      ));
      observer.complete();
    });
  }
}

export interface ArchiveDirectory {
  lastChanged: Date;
  pathFragment: string;
  icon?: string;
}

export interface ArchiveFile<T = any> {
  lastChanged: Date;
  icon?: string;
  name: string;
  path?: string;
  data: T;
}
