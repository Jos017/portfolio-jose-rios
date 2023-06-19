import { WorkExperience } from '../common/types';

const ExpMenu = ({
  workExperience,
  currentIndex,
  setCurrentIndex,
}: {
  workExperience: WorkExperience[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ul className='max-w-xs'>
      {workExperience.map((job, index) => (
        <li
          key={`Company-${index}`}
          className={`border-l-[3px] hover:bg-dark-0 hover:text-primary-main ${
            currentIndex === index
              ? 'border-primary-main text-primary-main'
              : 'border-dark-2 bg-none'
          }`}
        >
          <button
            className="w-full px-4 py-2 text-start"
            onClick={() => handleClick(index)}
          >
            {job.companyName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpMenu;
