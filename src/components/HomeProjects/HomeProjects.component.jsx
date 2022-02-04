import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../section-title/section-title.component';
import Button from '../button/button.component';
import Card from '../Card/Card.component';

import './HomeProjects.styles.scss';

function HomeProjects() {
  return (
    <Fragment>
      <div className='projects'>
        <SectionTitle>project</SectionTitle>

        <div className='projects-container'>
          <p>These are my recent projects.</p>
          <br />
          <Card />

          <Link to='/portfolio' className='btn'>
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeProjects;
