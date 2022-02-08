import React from 'react';
import './Clubs.css'
import clubsheadline from './images/head-line.png'
import clublogo1 from './images/club-logo-1.png'

export default function Clubs() {
  return(
    <div className='clubs'>
        <div className='clubs-heading'>
            <h2 className='clubs-head-text'>Clubs</h2>
            <img className='clubs-head-line' src={clubsheadline}/>
        </div>
        {/* <img className='club-logo-1' src={clublogo1}/> */}

    </div>
  );
}
