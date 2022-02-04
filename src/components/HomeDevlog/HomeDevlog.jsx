import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import SectionTitle from '../section-title/section-title.component';
import Devlog from '../Devlog/Devlog.component';

import './HomeDevlog.styles.scss';

export default function HomeDevlog() {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className='devlog'>
        <SectionTitle>devlog</SectionTitle>
        <div className='devlog_container'>
          <h2>Coming Soon...⚠️</h2>
          <p>What I learned & built this month.</p>
          <button
            onClick={() => {
              navigate('/devlog');
            }}
          >
            More
          </button>
        </div>
      </div>
    </Fragment>
  );
}
