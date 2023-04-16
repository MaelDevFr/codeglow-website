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
        <a href="/">
          <img
            src="./arrow-bottom2.png"
            alt="Arrow to bottom - Link"
            height="200px"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
