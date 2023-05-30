import Image from "next/image";
import Link from "next/link";
import gitHub from "../../../public/assets/icons/github.webp";
import linkedIn from "../../../public/assets/icons/linkedin.webp";
import resume from "../../../public/assets/icons/resume.webp";

const Footer = () => {
  return (
    <footer className="container--section">
      <ul
        className="footer__nav"
        role="list"
        aria-label="Social links">
        <li className="footer__item">
          <Link
            href="#hero"
            className="footer__link"
            title="Home">
            Home
          </Link>
        </li>
        <li className="footer__item">
          <Link
            href="#projects"
            className="footer__link"
            title="Projects">
            Projects
          </Link>
        </li>
        <li className="footer__item">
          <Link
            href="#about"
            className="footer__link"
            title="About">
            About
          </Link>
        </li>
        <li className="footer__item">
          <Link
            href="https://github.com/JVSONV"
            title="GitHub">
            <Image
              className="nav__icon"
              src={gitHub}
              alt="GitHub profile link"
            />
          </Link>
        </li>
        <li className="footer__item">
          <Link
            href="https://www.linkedin.com/in/jasonvallery/"
            title="LinkedIn">
            <Image
              className="nav__icon"
              src={linkedIn}
              alt="LinkedIn profile link"
            />
          </Link>
        </li>
        <li className="footer__item">
          <Link
            href="#"
            title="Download Resume">
            <Image
              className="nav__icon"
              src={resume}
              alt="Download Resume"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
