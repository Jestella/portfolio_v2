import React, { Fragment } from 'react';

import { ProjectData } from '../ProjectItem/ProjectData';
import Button from '../button/button.component';

import './Card.styles.scss';

const Card = () => {
  return (
    <Fragment>
      <div className='cards'>
        {ProjectData.map(({ imageUrl, projectName, technologies }, index) => (
          <Fragment>
            <div className='card' key={index}>
              <div className='card-img'>
                <img src={imageUrl}></img>
              </div>

              <div className='card-text'>
                <p className='card-project-name'>{projectName}</p>
                <p className='card-project-subname'>{technologies}</p>
                <br />
                <Button className='custom-button' inverted>
                  View
                </Button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* <div className='card-container'>
          <ul className='cards'>
            <li className='card'>
              <div className='card-image-box'>
                <img src={item.imageUrl}></img>
              </div>
              <div className='card-text'>
                <p className='project-name'>
                  {item.projectName} <span>{item.year}</span>
                </p>
                <p className='project-subname'>{item.subName}</p>
              </div>
             
            </li>
          </ul>
        </div> */}
    </Fragment>
  );
};

export default Card;
