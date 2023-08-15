interface IBlog {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface IProject {
  image: string;
  title: string;
  dateAdded: string;
  link: string;
}

interface ITag {
  tag: string;
}

export type { IBlog, IProject, ITag };
