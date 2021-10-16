import React from "react";

import "./section-title.styles.scss";

function SectionTitle(props) {
  return (
    <div className="section_title_container">
      <h2 className="section_title">{props.children}</h2>
    </div>
  );
}

export default SectionTitle;
