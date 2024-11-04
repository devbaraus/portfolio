declare type Project = {
  id: string;
  cover: string | null;
  status: boolean;
  title: string;
  type: string;
  date_finished: string | null;
  tags: string[];
  published_on: string | null;
  featured: boolean;
};

declare type Article = {
  id: string;
  title: string;
  lead: string;
  published_on: string;
  cover: {
    id: string;
  };
  tags: string[];
};
