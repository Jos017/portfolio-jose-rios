import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <main>
      <Hero/>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
