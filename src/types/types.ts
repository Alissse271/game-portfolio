interface IProject {
  title: string;
  description: string;
  tags: string[];
}

interface ITag {
  tag: string;
}

export type { IProject, ITag };
