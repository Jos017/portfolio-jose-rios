import React from 'react';
import { minSectionHeigthVariants, SizesRem } from '../common/stylesVariants';

type Props = {
  minH?: SizesRem;
};

const About = ({ minH = 'default' }: Props) => {
  return (
    <section
      id="about"
      className={`${minSectionHeigthVariants[minH]} flex items-center w-full p-4 sm:p-8`}
    >
      <h2>About Me</h2>
    </section>
  );
};

export default About;
