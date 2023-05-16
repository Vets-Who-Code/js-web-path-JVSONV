import Image from "next/image";
import Link from "next/link";
import gitHub from "/pubilc/assets/icons/github.webp";
import linkedIn from "/pubilc/assets/icons/linkedin.webp";
import resume from "/pubilc/assets/icons/resume.webp";

const Footer = () => {
  return (
    <footer className="container--section">
      <ul
        className="footer__nav"
        role="list"
        aria-label="Social links">
        <li className="footer__item">
          <a
            href="#hero"
            className="footer__link"
            title="Home">
            Home
          </a>
        </li>
        <li className="footer__item">
          <a
            href="#projects"
            className="footer__link"
            title="Projects">
            Projects
          </a>
        </li>
        <li className="footer__item">
          <a
            href="#about"
            className="footer__link"
            title="About">
            About
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://github.com/JVSONV"
            title="GitHub">
            <img
              className="nav__icon"
              src="./assets/icons/github.webp"
              alt="GitHub profile link"
            />
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://www.linkedin.com/in/jasonvallery/"
            title="LinkedIn">
            <img
              className="nav__icon"
              src="./assets/icons/linkedin.webp"
              alt="LinkedIn profile link"
            />
          </a>
        </li>
        <li className="footer__item">
          <a
            href="#"
            title="Download Resume">
            <img
              className="nav__icon"
              src="./assets/icons/resume.webp"
              alt="Download Resume"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
