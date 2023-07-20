type Link = { name: string; route: string; svg?: JSX.Element };

type Education = {
  school: string;
  studyField: string;
  startDate: Date;
  endDate: Date | 'present';
  location: { country: string; city?: string; locale?: string };
  description?: string[];
};

type Language = {
  language: string;
  level: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  techUsed: string[];
  imgUrl: string;
  gitHubMainUrl: string;
  gitHubSecondaryUrl?: string;
  deployUrl?: string;
  date: Date;
};

type WorkExperience = {
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate: Date | 'present';
  workDone: string[];
  webURL?: string;
  location: { country: string; city?: string; locale?: string };
};

export {
  type Education,
  type Language,
  type Link,
  type Project,
  type WorkExperience,
};
