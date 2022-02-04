import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';

import './Devlog.styles.scss';

const Devlog = () => {
  return (
    <Fragment>
      <div className='test'>
        <h1>Devlog page</h1>
        <Link to='/' className='btn'>
          <Button>back to home</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Devlog;
