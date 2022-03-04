export type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: { id: number; login: string; avatar_url: string };
};
export type Results = { totalCount: number; items: Repo[] };
