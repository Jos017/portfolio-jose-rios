import dayjs from 'dayjs';
import { WorkExperience } from '../common/types';

type props = { workExperience: WorkExperience[]; currentIndex: number };

const ExpJobDescription = ({ workExperience, currentIndex }: props) => {
  return (
    <div className="max-w-2xl">
      <div>
        <h5>
          {workExperience[currentIndex].jobTitle + ' - '}
          <span className="text-primary-main">
            {workExperience[currentIndex].companyName}
          </span>
        </h5>
        <p>
          {`${dayjs(workExperience[currentIndex].startDate).format(
            'MMM YYYY'
          )} - ${
            workExperience[currentIndex].endDate === 'present'
              ? 'Present'
              : dayjs(workExperience[currentIndex].endDate).format('MMM YYYY')
          }`}
        </p>
      </div>
      <ul className="list-disc ps-6">
        {workExperience[currentIndex].workDone.map((task, index) => (
          <li className="mt-3" key={`Task-${index}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpJobDescription;
