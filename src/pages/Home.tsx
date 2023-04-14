import React from 'react';

const Home = () => {
  return (
    <section className="w-full">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <div className="max-w-lg">
        <p>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
        <p className="text-body-2">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
        <q className="text-quote text-light-3">
          The sky was cloudless and of a deep dark blue.
        </q>
        <p className="uppercase text-capitalized text-light-3">
          Brainstrom alternative ideas
        </p>
        <p className="text-small text-light-3">Value for your time</p>
        <p className="text-small text-light-3">Nothing is imposible</p>
      </div>
    </section>
  );
};

export default Home;
