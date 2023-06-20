type Link = { name: string; route: string; svg?: JSX.Element };

type Project = {
  title: string;
  subtitle: string;
  description: string;
  techUsed: string;
  imgUrl: string;
  gitHubUrl: string;
  deployUrl?: string;
};

type WorkExperience = {
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate: Date | 'present';
  workDone: string[];
  webURL?: string;
};

export { type Link, type Project, type WorkExperience };
