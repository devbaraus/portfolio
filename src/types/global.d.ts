declare type Project = {
  id: string;
  title: string;
  published_on: string;
  date_finished_func: {
    year: string;
  };
  cover: {
    id: string;
  };
  tags: string[];
  type: string;
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
