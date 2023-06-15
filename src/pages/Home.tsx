import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <main className="mx-auto max-w-screen-lg px-4 sm:px-8">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
