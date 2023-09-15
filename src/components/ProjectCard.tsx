import notAvailableImg from '../assets/images/imageNotAvailable.jpg';

import { FC, useState } from 'react';
import { Project } from '../common/types';
import GitHub from '../assets/icons/GitHub';
import ExternalLink from '../assets/icons/ExternalLink';

type props = { imgPos?: 'left' | 'right'; project: Project };

const ProjectCard: FC<props> = ({ project, imgPos = 'left' }) => {
  const {
    deployUrl,
    description,
    gitHubMainUrl,
    gitHubSecondaryUrl,
    subtitle,
    techUsed,
    title,
  } = project;
  const [imgUrl, setImgUrl] = useState(project.imgUrl);

  return (
    <div
      className={`${
        imgPos === 'right' ? 'flex-row-reverse' : 'flex-row'
      } flex gap-6`}
    >
      <div className="h-fit max-w-lg overflow-hidden rounded-lg border-4 border-solid border-light-1 border-opacity-30 hover:border-opacity-80">
        <a href={deployUrl} rel="noreferrer" target="_blank">
          <img
            className="w-full"
            src={!imgUrl ? notAvailableImg : imgUrl}
            alt={title}
            onError={() => setImgUrl(notAvailableImg)}
          />
        </a>
      </div>
      <div className="flex max-w-sm flex-col gap-4">
        <div>
          <p>{subtitle}</p>
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {techUsed.map((tech, index) => (
            <li
              key={`${index} ${tech}`}
              className="rounded-full bg-primary-darker px-2 text-light-4"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a href={gitHubMainUrl} rel="noreferrer" target="_blank">
            <GitHub />
          </a>
          {gitHubSecondaryUrl && (
            <a href={gitHubSecondaryUrl} rel="noreferrer" target="_blank">
              <GitHub />
            </a>
          )}
          {deployUrl && (
            <a href={deployUrl} rel="noreferrer" target="_blank">
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
