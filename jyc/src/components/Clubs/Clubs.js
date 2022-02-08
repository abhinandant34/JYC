import React from 'react';
import './Clubs.css'
import clubsheadline from './images/line.png'
import clublogo1 from './images/club-1.png'

export default function Clubs() {
  return(
    <div className='clubs'>
        <div className='clubs-heading'>
            <h2 className='clubs-head-text'>Clubs</h2>
            <img className='clubs-head-line' src={clubsheadline}/>
        </div>
        <div className='clubs-all'>
            <img className='club-logo-1' src={clublogo1}/>
        </div>
    </div>
  );
}
