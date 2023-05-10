const Navigation = () => {
  return (
    <header className="primary-header">
      <div className="container--section">
        <div className="nav-wrapper">
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
            aria-label="Menu button">
            <img
              className="icon__hamburger"
              src="./assets/icons/menu.webp"
              alt="Menu icon"
              aria-hidden="true"
            />
            <img
              className="icon__close"
              src="./assets/icons/close.webp"
              alt="Close icon"
              aria-hidden="true"
            />
            <span className="sr-only">Menu</span>
          </button>

          <nav
            className="primary-navigation"
            id="primary-navigation">
            <ul
              className="nav__list"
              role="navigation"
              aria-label="Primary Navigation">
              <li className="list__item">
                <a
                  href="index.html"
                  className="nav__link">
                  Home
                </a>
              </li>
              <li className="list__item">
                <a
                  href="#projects"
                  className="nav__link">
                  Projects
                </a>
              </li>
              <li className="list__item">
                <a
                  href="#about"
                  className="nav__link">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <button
            id="contact-me"
            className="button"
            type="button"
            aria-controls="modal">
            Reach Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;