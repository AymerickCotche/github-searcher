export type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  owner: { id: number; login: string; avatar_url: string };
};
export type Results = { totalCount: number; items: Repo[] };
