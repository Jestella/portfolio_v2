import React from "react";

import "./header.styles.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <p className="nav_item nav_left" onClick={scrollToTop}>
          JE.
        </p>
        <p className="nav_item nav_right" onClick={scrollToTop}>
          STELLA LEE
        </p>
      </nav>
    </div>
  );
}

export default Header;
