/**
 * Provides the signature for a github repository commit. This interface is incomplete!
 * @see https://developer.github.com/v3/repos/commits/
 */
export interface IRepositoryCommit {
  url: string;
  sha: string;
  html_url: string;
  comments_url: string;
  commit: {
    url: string;
    author: {
      name: string;
      email: string;
      date: Date;
    };
    committer: {
      name: string;
      email: string;
      date: Date;
    };
    message: string;
    tree: {
      url: string;
      sha: string;
    };
    comment_count: string;
    verification: {
      verified: boolean;
      reason: string;
      signature: string;
      payload: string;
    };
  };
  author: {
    login: string;
    id: number
    avatar_url: string;
    url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
  };
  committer: {
    login: string;
    id: number
    avatar_url: string;
    url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
  };
  stats: {
    additions: number;
    deletions: number;
    total: number;
  };
  files: Array<{
    filename: string;
    additions: number;
    deletions: number;
    changes: number;
    status: string;
    path: string;
  }>;
}
