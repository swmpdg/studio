import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class Locale<T = any> {
  /** Gets the regex pattern used to insert the locale into a given resource url */
  public static readonly RES_PATTERN = /{(loc|locale|localeKey|lang|langKey|language)}/gi;

  private _locale: string;
  private _resourceKeyCache: Map<string, string[]>;
  private _resources: T;

  public constructor(protected http: Http) { }

  /** Gets the currently used locale */
  public get current() {
    return this._locale || document.body.lang;
  }
  /** Sets the currently used locale */
  public set current(value: string) {
    if (value && this._locale !== value) {
      this._locale = document.body.lang = value;
    }
  }
  /** Gets the resources held by the locale context */
  public get resources() {
    return this._resources;
  }

  /**
   * Creates an observable stream holding the desired resource
   * @param {string} resourceUrl The resource url referring the the desired resource
   * @returns The observable stream holding the desired resource
   */
  public from<T = any>(resourceUrl: string): Observable<T> {
    if (!this._resourceKeyCache) {
      this._resourceKeyCache = new Map<string, string[]>();
    }

    const resource = resourceUrl.replace(Locale.RES_PATTERN, this.current);
    return this.http.get(resource).map((response: Response) => response.json() as T);
  }

  /**
   * Subscribes the resource receive workflow and emits the value as new origin for the locale resources
   * @param {string} resourceUrl The resource url to use as new origin
   */
  public origin(resourceUrl: string): Observable<T> {
    return Observable.create(observer => {
      this.from(resourceUrl).subscribe(resource => {
        this._resourceKeyCache.set(resourceUrl, Object.keys(resource));
        this._resources = resource;

        observer.next(resource);
        observer.complete();
      }, observer.error);
    });
  }

  /**
   * Subscribes the resource receive workflow and emits the value by merging it into the locale resources
   * @param {string} resourceUrl The resource url to use for the merge process
   */
  public merge(resourceUrl: string): Observable<T> {
    return Observable.create(observer => {
      this.from(resourceUrl).subscribe(resource => {
        this._resourceKeyCache.set(resourceUrl, Object.keys(resource));
        this._resources = Object.assign(this._resources, resource);

        observer.next(resource);
        observer.complete();
      }, observer.error);
    });
  }

  /**
   * Disposes the locale resources or a specific resource by its original url
   * @param {string} [resourceUrl] Optional resource url to revoke
   */
  public dispose(resourceUrl?: string): Observable<string | void> {
    return Observable.create(observer => {
      try {
        if (resourceUrl && this._resources) {
          // Is there a specific resource url to revoke...?
          const keyCache = this._resourceKeyCache.get(resourceUrl);
          this._resourceKeyCache.delete(resourceUrl);

          for (const key of keyCache || []) {
            // Let's clean up that mess so the resource stays where it belongs...
            if (this._resources.hasOwnProperty(key)) {
              this._resources[key] = null;
              delete this._resources[key];

              observer.next(key);
            }
          }
          observer.complete();
        } else {
          // Hm. Let's just tidy quick i guess...
          this._resourceKeyCache = null;
          this._resources = null;

          observer.next();
          observer.complete();
        }
      } catch (err) {
        observer.error(err);
      }
    });
  }

  /**
   * Excludes and returns the given resource fragment from the current locale resources
   * @param {string} resourceUrl The resource url to use for the exclusion
   */
  public exclude(resourceUrl: string): Observable<T> {
    return Observable.create(observer => {
      const exclusion = {} as any;

      try {
        const keyCache = this._resourceKeyCache.get(resourceUrl);
        this._resourceKeyCache.delete(resourceUrl);

        for (const key of keyCache || []) {
          // Let's create the exclusion fields...
          if (this._resources.hasOwnProperty(key)) {
            exclusion[key] = this._resources[key];
            // Clean it up afterwards...
            this._resources[key] = null;
            delete this._resources[key];
          }
        }
      } catch (err) {
        observer.error(err);
      }

      observer.next(exclusion);
      observer.complete();
    });
  }

  /**
   * Returns whether a given resource is currently available by checking its resource url
   * @param {string} resourceUrl The resource url to check
   */
  public has(resourceUrl: string): boolean {
    return this._resourceKeyCache.has(resourceUrl || "");
  }
}
