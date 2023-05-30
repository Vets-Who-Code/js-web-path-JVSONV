"use client";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../../pages/store/modalCtxProvider";
import apex from "/public/assets/photos/companies/apex.webp";
import costco from "/public/assets/photos/companies/costcologo.webp";
import usmc from "/public/assets/photos/companies/marinecorps.webp";
import vetsWhoCode from "/public/assets/photos/companies/vetswhocode.webp";
import jason from "/public/assets/photos/jason_desktop.webp";

const About = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <section
      id="about"
      aria-label="About me">
      <div className="container--section">
        <header className="about__header">
          <h2 className="about__header header header--about">
            Me Myself &amp; I
          </h2>
        </header>
        <div className="about__me">
          <h3 className="about__title">ABOUT ME</h3>
          <p className="about__summary">
            Marine Corps leader turned software developer. After several
            successful leadership roles in the military and business world, I
            taught myself web development and honed my skills through
            VetsWhoCode.
          </p>
        </div>
        <div className="hotspot-container">
          <Image
            className="owner__photo"
            src={jason}
            alt="Jason Vallery"
          />
          <div className="all__hotspots">
            <div className="tooltip costco">
              <div className="hotspot"></div>
              <div
                className="tooltip__content"
                data-right="false">
                <div className="border-pointer"></div>
                <div className="company-img-container">
                  <Image
                    src={costco}
                    alt="Costco Wholesale logo"
                    className="company__img"
                  />
                </div>
                <div className="history">
                  <h4 className="history__title">Costco Wholesale</h4>
                  <p className="history__summary">
                    At Costco Wholesale, I was a supervisor. I supervised a team
                    of 6 associates responsible for generating an average of
                    250,000 in weekly sales, with certain Holiday weeks earning
                    up to 1.2 million. I ensured a quarterly loss of below 5%
                    through proper date rotation and applying and tracking
                    credit for products damaged in transportation. I held high
                    levels of independence and responsibility in ensuring that
                    all merchandise was stocked and available for all auxiliary
                    departments.
                  </p>
                </div>
              </div>
            </div>
            <div className="tooltip usmc">
              <div className="hotspot"></div>
              <div
                className="tooltip__content"
                data-right="true">
                <div className="border-pointer"></div>
                <div className="company-img-container">
                  <Image
                    src={usmc}
                    alt="Jason Vallery in his U.S. Marine Corps dress blues"
                    className="company__img"
                  />
                </div>
                <div className="history">
                  <h4 className="history__title">U.S. Marine Corps</h4>
                  <p className="history__summary">
                    As a Corporal (E-4) in the United States Marine Corps, I
                    completed 33 preventative maintenance services on heavy
                    equipment, decreasing unexpected repairs by 15%. I
                    maintained accountability for over 1.1 million dollars worth
                    of tools and equipment. Additionally, I scheduled and
                    coordinated daily physical training and required physical
                    tests for up to 27 marines.
                  </p>
                </div>
              </div>
            </div>
            <div className="tooltip apex">
              <div className="hotspot"></div>
              <div
                className="tooltip__content"
                data-right="true">
                <div className="border-pointer"></div>
                <div className="company-img-container">
                  <Image
                    src={apex}
                    alt="Apex Deliveries business photo"
                    className="company__img"
                  />
                </div>
                <div className="history">
                  <h4 className="history__title">Apex Deliveries</h4>
                  <p className="history__summary">
                    At Apex Deliveries, I was the owner and was responsible for
                    increasing year-over-year sales by 28%. I built rapport with
                    store and grocery managers to optimize product placement. I
                    also delivered daily orders to local customers. I adapted
                    quickly to changing landscapes, pivoting services and
                    offerings through COVID-19 and inclement weather conditions
                    while providing excellent customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__current">
          <h3 className="about__title current">CURRENTLY</h3>
          <div className="current__content">
            <Image
              className="vets-img"
              src={vetsWhoCode}
              alt="Vets Who Code logo"
            />
            <p className="current__status">
              I am currently practicing and honing my skills with #VetsWhoCode.
            </p>
            <p className="current__statement">
              Reach out to chat or grab a copy of my current resume
            </p>
            <div className="button__wrapper">
              <button
                className="button button--current"
                type="button"
                onClick={modalCtx.showModalHandler}>
                Reach out
              </button>
              <button
                className="button button--resume"
                type="button">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
