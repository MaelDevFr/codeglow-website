import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul>
            <li>
              <a className="link-navbar" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link-navbar" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="link-navbar" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="link-navbar" href="/code">
                Portail
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="title text-center">CodeGlow, un éditeur de code...</h1>
        <h2 className="title2 text-center">mais pas que</h2>
      </header>
      <div className="callToActionContainer">
        <a href="#qualities">
          <img
            src="./arrow-bottom2.png"
            alt="Arrow to bottom - Link"
            height="200px"
          />
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="qualities" id="qualities">
        <div className="grid">
          <div className="step">
            <img src="./internet.png" alt="" />
            <h1 className="text-center">En ligne</h1>
            <p>
              Plus besoin de télécharger des applications lourdes et gourmandes
              en RAM. Vous avez un naviguateur web ( c'est très probable puisque
              vous êtes là ) ? Alors si oui vous pouvez coder ! Plus d'excuse,
              nous combattons la procrastination.
            </p>
          </div>
          <div className="step">
            <img src="./gitlab.png" alt="" />
            <h1 className="text-center">Open Source</h1>
            <p>
              Le code étant disponible sur github pour les curieux, vous pouvez
              contribuer à codeglow en signalant des bugs ou en proposant des
              fonctionalités. Nous nous efforçons de vous écouter au mieux
              possible.
            </p>
          </div>
          <div className="step">
            <img src="./config.png" alt="" />
            <h1 className="text-center">Configurable</h1>
            <p>
              Personalisable à souhait, notre outil a été conçus dans le but de
              vous faire aimer vos longues heures de travail et cela passe par
              une personalisation unique pour que votre IDE vous convienne et
              vous procure du plaisir.
            </p>
          </div>
          <hr className="separation" />
          <hr className="separation" />
          <hr className="separation" />

          <div className="step"></div>
          <div className="step"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
