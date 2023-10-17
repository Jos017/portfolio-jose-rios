const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen w-full flex-col justify-center"
    >
      <div className="flex h-full max-w-3xl flex-col items-start justify-center gap-y-4 sm:gap-y-8">
        <p className="text-primary-lighter">Hi, my name is</p>
        <div>
          <h1 className="sm:mb-4 sm:text-6xl">Jose Rios.</h1>
          <h2 className="text-inherit sm:text-6xl">
            I build things for the web
          </h2>
        </div>
        <p>
          I'm a Fullstack web developer, always learning new things. I used to be
          Electromechanical Engineering. I love playing video games
        </p>
      </div>
    </section>
  );
};

export default Hero;
