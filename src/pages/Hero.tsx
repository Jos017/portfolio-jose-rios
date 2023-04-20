import React from 'react';
import { minSectionHeigthVariants, SizesRem } from '../common/stylesVariants';

type Props = {
  minH?: SizesRem;
};

const Hero = ({ minH = 'default' }: Props) => {
  return (
    <section
      id="hero"
      className={`${minSectionHeigthVariants[minH]} flex items-center w-full p-4 sm:p-8`}
    >
      <div className="flex flex-col items-start justify-center h-full max-w-3xl gap-y-4 sm:gap-y-8">
        <p className="text-primary-lighter">Hi, my name is</p>
        <div>
          <h1 className="sm:mb-4 sm:text-6xl">Jose Rios.</h1>
          <h2 className="sm:text-6xl text-inherit">
            I build things for the web
          </h2>
        </div>
        <p>
          I'm a Fullstack web developer, focused in Fronted side. I used to be
          Electromechanical Engineering. I love playing videogames
        </p>
      </div>
    </section>
  );
};

export default Hero;
