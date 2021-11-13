import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../section-title/section-title.component";

import "./devlog.styles.scss";

export default function Devlog() {
  return (
    <div className="devlog">
      <SectionTitle>devlog</SectionTitle>
      <div className="devlog_container">
        <h2>In Progress...</h2>
        <p>What I am learning every month.</p>
        <Link to="/devlog" className="btn">
          Click Here
        </Link>
      </div>
    </div>
  );
}
