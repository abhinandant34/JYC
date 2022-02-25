import React from 'react';
import './Clubs.css';
import clublogo1 from './images/club-1.png';
import Card from './Card/Card';
import './Committees.css';
import { Link , Route, Outlet} from 'react-router-dom';

export default function Clubs() {
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
            link='//www.google.com'
            />
          <Card
            img={clublogo1}
            heading='THEATRE AND MUSIC CLUB'
            about='The Theatre and Music Club of JUIT provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'
            link='/TAM'
            />
          <Card
            img={clublogo1}
            heading='CULTURAL AND DANCE CLUB'
            about='As the name suggests, one of the primary aims of the Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'
            link='/CAD'
            />
          <Card
            img={clublogo1}
            heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
            about='The clubs aim at providing a overall development of the members for the future.'
            link='/EEH'
            />
          <Card
            img={clublogo1}
            heading='TECHNICAL AND PHOTOGRAPHY CLUB'
            about='Composition of Movie, Photography and Createch the Technical Club of JUIT provides personal growth,leadership and learning opportunities.'
            link='/TAC'
            />
          <Card
            img={clublogo1}
            heading='SPORTS CLUB'
            about='Sports Club is one of the distinguishable bodies in the JYC which revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'
            link='/SPR'
            />
        </div>
      </div>
      <div className='comittees'>     
        <div className='comittees-heading'>  
          <h2 className='comittees-head-text'>Comittees</h2>   
          <div className='comittees-heading-underline'></div>  
        </div>
        <div className='comittees-all'>     {/*created a div for the whole portion of Committees */}
          <Card               //added first card imported from Card and passed values and required to it
            img={clublogo1}
            heading='LITERARY AND DEBATING CLUB'
            about='Literary & Dramatics Club is home to all the literature enthusiasts, theater lovers and street play artists.'
            link='/cars'
            />
          <Card
            img={clublogo1}
            heading='THEATRE AND MUSIC CLUB'
            about='The Theatre and Music Club of JUIT provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'
            link='/cars'
            />
          <Card
            img={clublogo1}
            heading='CULTURAL AND DANCE CLUB'
            about='As the name suggests, one of the primary aims of the Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'
            link='/cars'
            />
          <Card
            img={clublogo1}
            heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
            about='The clubs aim at providing a overall development of the members for the future.'
            link='/cars'
            />
          <Card
            img={clublogo1}
            heading='TECHNICAL AND PHOTOGRAPHY CLUB'
            about='Composition of Movie, Photography and Createch the Technical Club of JUIT provides personal growth,leadership and learning opportunities.'
            link='/cars'
            />
          <Card
            img={clublogo1}
            heading='SPORTS CLUB'
            about='Sports Club is one of the distinguishable bodies in the JYC which revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'
            link='/cars'
            />
        </div>
      </div>
    </div>
  );
}