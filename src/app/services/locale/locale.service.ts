import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class Locale<T = any> {
  /** Gets the regex pattern used to insert the locale into a given resource url */
  public static readonly RES_PATTERN = /{(loc|locale|localeKey|lang|langKey|language)}/gi;

  private _locale: string;
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
    const resource = resourceUrl.replace(Locale.RES_PATTERN, this.current);
    return this.http.get(resource).map((response: Response) => response.json() as T);
  }

  /**
   * Subscribes the resource receive workflow and emits the value as new origin for the locale resources
   * @param {string} resourceUrl The resource url to use as new origin
   */
  public origin(resourceUrl: string): void {
    this.from(resourceUrl).subscribe(resource => {
      this._resources = resource;
    });
  }

  /**
   * Subscribes the resource receive workflow and emits the value by merging it into the locale resources
   * @param {string} resourceUrl The resource url to use for the merge process
   */
  public merge(resourceUrl: string): void {
    this.from(resourceUrl).subscribe(resource => {
      this._resources = Object.assign(this._resources, resource);
    });
  }
}
