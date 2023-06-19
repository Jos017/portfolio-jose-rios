type Link = { name: string; route: string; svg?: JSX.Element };
type WorkExperience = {
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate: Date | 'present';
  workDone: string[];
  webURL?: string;
};

export { type Link, type WorkExperience };
