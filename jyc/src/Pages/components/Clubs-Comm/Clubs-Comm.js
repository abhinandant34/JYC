import React from 'react';
import './Clubs.css';
import clublogo1 from './images/club-1.png';
import Card from './Card/Card';
import './Committees.css';
import { Link , Route, Outlet} from 'react-router-dom';
import { useEffect } from 'react';

export default function Clubs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
    <div className='clubs-comm'>
      <div className='clubs'>
        <div className='clubs-heading'>
          <h2 className='clubs-head-text'>Clubs</h2>
          <div className='club-heading-underline'></div>
        </div>
        <div className='clubs-all'>
          <Card
            img={clublogo1}
            heading='LITERARY AND DEBATING CLUB'
            about='Literary & Dramatics Club is home to all the literature enthusiasts, theater lovers and street play artists.'
            link='/literary-club'
            />
          <Card
            img={clublogo1}
            heading='THEATRE AND MUSIC CLUB'
            about='The Theatre and Music Club provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'
            link='/theatre-club'
            />
          <Card
            img={clublogo1}
            heading='CULTURAL AND DANCE CLUB'
            about='Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'
            link='/cultural-club'
            />
          <Card
            img={clublogo1}
            heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
            about='The club aim at providing a overall development of the members for the future.'
            link='/environment-club'
            />
          <Card
            img={clublogo1}
            heading='TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB'
            about='Technical Club of JUIT provides personal growth, leadership and learning opportunities.'
            link='/tmp-club'
            />
          <Card
            img={clublogo1}
            heading='SPORTS CLUB'
            about='Sports Club revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'
            link='/sports-club'
            />
        </div>
      </div>
      <div className='comittees'>     
        <div className='comittees-heading'>  
          <h2 className='comittees-head-text'>Committees</h2>   
          <div className='comittees-heading-underline'></div>  
        </div>
        <div className='comittees-all'>     {/*created a div for the whole portion of Committees */}
          <Card               //added first card imported from Card and passed values and required to it
            img={clublogo1}
            heading='Events & Procurement Committee'
            about='Events Committee are a power packed combination of "strength and wisdom" along with the "unity and team work" with which we execute the tasks.'
            link='/eventspro-committee'
            />
          <Card
            img={clublogo1}
            heading='Registration and Hospitality Committee'
            about='Hospitality And Registration is responsibile for receiving guests with goodwill.'
            link='/registration-committee'
            />
          <Card
            img={clublogo1}
            heading='Media & Publicity Committee'
            about='The Publicity and Sponsorship Committee of the JUIT Youth Club is an unsung part of the club.'
            link='/media-committee'
            />
          <Card
            img={clublogo1}
            heading='Creative Arts Committee'
            about="It's work is to provide all the requirements needed for the event by all othet JYC Club or Committee."
            link='/arts-committee'
            />
          <Card
            img={clublogo1}
            heading="Disciplinary Committee"
            about="The Disciplinary Committee maintains discipline in the campus during events and make sure that there's no misconduct of any kind in campus."
            link='/disciplinary-committee'
            />
          <Card
            img={clublogo1}
            heading='Finance Committee'
            about="The finance committee provides financial support for organizing events using sponsors from various fields like technical ,food etc."
            link='/finance-committee'
            />
        </div>
      </div>
    </div>
  );
}