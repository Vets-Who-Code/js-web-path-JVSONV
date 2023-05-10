import Link from "next/link";
import Image from "next/image";
import vibeCheck from "../../pubilc/assets/photos/imageOptimized.webp";
import sheesh from "../../pubilc/assets/photos/imageOptimized (1).webp";
import plug from "../../pubilc/assets/photos/imageOpt.webp";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="container--section">
      <header className="section__title">
        <h2 className="project__header">Projects</h2>
      </header>

      <div className="projects-container">
        <ul
          className="project__list"
          role="list"
          aria-label="Project List">
          <li className="project">
            <div className="preview">
              <Image
                src={vibeCheck}
                alt="Vibe Check website screenshot"
              />
            </div>
            <div className="project__info">
              <div className="project__title">
                <p className="num">01</p>
                <h3 className="title">Vibe Check</h3>
              </div>
              <p className="project__description">
                Find your perfect spot for any mood or occasion with our
                website's personalized recommendations. Our platform connects
                you with a database of places that match your desired ambiance,
                vibe, and atmosphere.
              </p>
            </div>
          </li>

          <li className="project">
            <div className="preview">
              <Image
                src={sheesh}
                alt="Sheesh car club website screenshot"
              />
            </div>
            <div className="project__info">
              <div className="project__title">
                <p className="num">02</p>
                <h3 className="title">Sheeesh.</h3>
              </div>
              <p className="project__description">
                Connect with local car enthusiasts and take your passion to the
                next level with our website's car group pages.
              </p>
            </div>
          </li>

          <li className="project">
            <div className="preview">
              <Image
                src={plug}
                alt="Plug website screenshot"
              />
            </div>
            <div className="project__info">
              <div className="project__title">
                <p className="num">03</p>
                <h3 className="title">The Plug</h3>
              </div>
              <p className="project__description">
                The Plug connects you with anonymous verified locals who share
                their favorite spots for food, drinks, fun, and sightseeing.
                IYKYK.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Link
        className="course-work button"
        href="/vetsWhoCode"
        target="_blank">
        Click here to view VetsWhoCode course work
      </Link>
    </section>
  );
};

export default Projects;
