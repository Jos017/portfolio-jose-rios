import Page from '../components/Page';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
  return (
    <Page component="main"className="max-screen-xl">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Page>
  );
};

export default Home;
