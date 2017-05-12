import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { IRepositoryCommit } from "./repository.typings";

@Injectable()
/** Provides github repository information */
export class Repository {
  private _repoName = "studio";
  private _repoHolder = "vandalsquad";
  private _commits: Array<IRepositoryCommit> = [];

  public constructor(protected http: Http) { }

  /** Gets the captured commit history */
  public get commits() {
    return this._commits;
  }

  /**
   * Creates an observable stream capturing and updating the commits property on every subscription
   * @returns {Observable<IRepositoryCommit[]>} Returns the observable stream
   */
  public getCommitHistory(): Observable<IRepositoryCommit[]> {
    return this.http
      .get(`https://api.github.com/repos/${this._repoHolder}/${this._repoName}/commits`)
      .map(response => response.json())
      .do(body => this._commits = body);
  }
}
