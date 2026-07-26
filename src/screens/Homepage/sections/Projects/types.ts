export type RepoStatus = 'alpha' | 'live';

export type Repo = {
  name: string;
  href: string;
  status: RepoStatus;
  description: string;
  meta: string;
};
