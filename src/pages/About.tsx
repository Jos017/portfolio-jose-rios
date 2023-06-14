import profilePic from '../assets/images/profilePic.jpg';
import Page from '../components/Page';

const About = () => {
  return (
    <Page component="section">
      <div className="flex flex-col gap-8">
        <h2>About Me</h2>
        <div className="flex items-center">
          <div className="flex flex-col gap-4">
            <p>
              I'm a Full-stack Web Developer focused in the fronted side,
              JavaScript programmer, self-taught, good at working with groups, I
              can learn new things very fast. Enthusiast of video games and 3D
              design. I also like reading a lot and watch movies. Always looking
              for something new to learn.
            </p>
            <p>
              I have experience working with: JavaScript, TypeScript, React,
              NodeJs, ExpressJs, MongoDB, Git, Material-UI, Bootstrap, Tailwind,
              HTML & CSS I used to work for about 4 years as a Electromechanical
              Engineer but realized that was not the path I liked for the rest
              of my life, so I introduced myself to the world of programming and
              begin studying for about 1 year and discover it was the best
              choice I have done. Now I feel good and love programming and want
              to learn a lot more.
            </p>
            <p>
              If you have any questions that I can help with, please feel free
              to reach out here on LinkedIn or contact me directly at
              jrbernabe@gmail.com. I look forward to speaking with you!
            </p>
          </div>
          <div>
            <img src={profilePic} alt="Profile picture" />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default About;
