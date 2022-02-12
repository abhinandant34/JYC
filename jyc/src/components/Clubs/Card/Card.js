import React from 'react';
import './Card.css';
;


export default function Card(parse) {
  return (
    <div className='club-card'>
      <img className='club-logo-image' src={parse.img}/>
      <div className='club-card-content'>
        <div className='club-card-heading'>
          {parse.heading}
        </div>
        <div className='club-card-about'>
          {parse.about}
        </div>
      </div>
    </div>
  );
}
