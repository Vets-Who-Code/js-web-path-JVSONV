"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { ModalContext } from "../../store/modalCtxProvider";
import closeIcon from "../../../public/assets/icons/close.webp";
import menuIcon from "../../../public/assets/icons/menu.webp";


const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const modalCtx = useContext(ModalContext);

  const navToggleHandler = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const openNav = (
    <Image
      className="icon__hamburger"
      src={menuIcon}
      alt="Menu icon"
      aria-hidden="true"
    />
  );

  const closeNav = (
    <Image
      className="icon__close"
      src={closeIcon}
      alt="Close icon"
      aria-hidden="true"
    />
  );

  return (
    <header className="primary-header">
      <div className="container--section">
        <div className="nav-wrapper">
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={isMobileNavOpen}
            aria-label="Menu button"
            onClick={navToggleHandler}>
            {isMobileNavOpen ? closeNav : openNav}
            <span className="sr-only">
              {isMobileNavOpen ? "Close Menu" : "Open Menu"}
            </span>
          </button>
          <nav
            className="primary-navigation"
            id="primary-navigation"
            data-opended={isMobileNavOpen}>
            <ul
              className="nav__list"
              role="navigation"
              aria-label="Primary Navigation">
              <li className="list__item">
                <Link
                  href="/"
                  className="nav__link">
                  Home
                </Link>
              </li>
              <li className="list__item">
                <Link
                  href="/#projects"
                  className="nav__link">
                  Projects
                </Link>
              </li>
              <li className="list__item">
                <Link
                  href="/#about"
                  className="nav__link">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <button
            id="contact-me"
            className="button"
            type="button"
            aria-controls="modal"
            onClick={modalCtx.showModalHandler}>
            Reach Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
