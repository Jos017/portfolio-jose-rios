import { useState } from 'react';
import { WORK_EXPERIENCE } from '../common/const';
import ExpMenu from '../components/ExpMenu';
import ExpJobDescription from '../components/ExpJobDescription';

const Experience = () => {
  const [jobIndex, setJobIndex] = useState(0);

  return (
    <section className="mx-auto py-32 flex w-full flex-col gap-8">
      <h2>Work Experience</h2>
      <div className="flex justify-between gap-8">
        <ExpMenu
          workExperience={WORK_EXPERIENCE}
          currentIndex={jobIndex}
          setCurrentIndex={setJobIndex}
        />
        <ExpJobDescription
          workExperience={WORK_EXPERIENCE}
          currentIndex={jobIndex}
        />
      </div>
    </section>
  );
};

export default Experience;
