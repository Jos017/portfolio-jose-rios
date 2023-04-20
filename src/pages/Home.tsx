import React from 'react';
import { minSectionHeigthVariants, SizesRem } from '../common/stylesVariants';
import About from './About';
import Hero from './Hero';

type Props = {
  minH?: SizesRem;
};

const Home = ({ minH = 'default' }: Props) => {
  return (
    <main
      className={`${minSectionHeigthVariants[minH]} w-full max-w-screen-xl mx-auto`}
    >
      <Hero minH="4rem" />
      <About minH="full" />
    </main>
  );
};

export default Home;
