import profilePic from '../assets/images/profilePic.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen w-full flex-col justify-center"
    >
      <div className="flex flex-col gap-8">
        <h2>About Me</h2>
        <div className="flex h-full w-full flex-wrap justify-center gap-8">
          <div className="flex max-w-xl flex-col gap-6">
            <p>
              I'm a Full-stack Web Developer focused in the fronted side,
              JavaScript programmer, self-taught, good at working with groups, I
              can learn new things very fast. Enthusiast of video games and 3D
              design. I also like reading a lot and watch movies. Always looking
              for something new to learn.
            </p>
            <div className="flex flex-col gap-2">
              <p>I have experience working with:</p>
              <ul className="list-disc columns-2 ps-6 sm:columns-3">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
            <p>
              I used to work for about 4 years as a Electromechanical Engineer
              but realized that was not the path I liked for the rest of my
              life, so I introduced myself to the world of programming and begin
              studying for about 1 year and discover it was the best choice I
              have done. Now I feel good and love programming and want to learn
              a lot more.
            </p>
          </div>
          <div className="h-fit max-w-xs overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-contain object-top"
              src={profilePic}
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
