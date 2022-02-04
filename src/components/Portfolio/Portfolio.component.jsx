import React, { Fragment } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem.component';

import './Portfolio.styles.scss';

const Portfolio = () => {
  return (
    <Fragment>
      <div className='portfolio-page'>
        <h1>Portfolio</h1>
        <ProjectItem />
      </div>
    </Fragment>
  );
};

export default Portfolio;
