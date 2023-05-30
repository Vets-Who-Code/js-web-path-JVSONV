

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero--section"
      aria-label="Welcome">
      <div className="hero container--section">
        <div className="hero__container">
          <div className="hero__content">
            <p className="hero__intro">Hey there 👋🏼, I&#39;m</p>
            <p className="hero__owner">Jason</p>
            <p className="owner__last-name">Vallery</p>
          </div>
        </div>
        <div className="attr__container">
          <p className="attr">
            I <span className="attr__key">Tinker</span>,
            <span className="attr__key">Learn</span> and
            <span className="attr__key">Solve</span> by building
            <span className="break"> &amp; breaking </span>things
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero