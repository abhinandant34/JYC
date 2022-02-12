import React from 'react';
import './Clubs.css'
import clublogo1 from './images/club-1.png'
import Card from './Card/Card';

export default function Clubs() {
  return(
    <div className='clubs'>
        <div className='clubs-heading'>
            <h2 className='clubs-head-text'>Clubs</h2>
            <div className='club-heading-underline'></div>
        </div>
        <div className='clubs-all'>
            <div className='clubs-left-side clubs-up-3'>  
                <div className='clubs-card'>   
                    <Card
                    img={clublogo1}
                    heading='LITERARY AND DEBATING CLUB'
                    about='Literary & Dramatics Club is home to all the literature enthusiasts, theater lovers and street play artists.'
                    />
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='THEATRE AND MUSIC CLUB'
                    about='The Theatre and Music Club of JUIT provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'
                    />
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='CULTURAL AND DANCE CLUB'
                    about='As the name suggests, one of the primary aims of the Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'
                    />
                </div>
            </div>
            <div className='clubs-right-side clubs-below-3'>
                <div className='clubs-card top-club-card'>
                    <Card
                    img={clublogo1}
                    heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
                    about='The clubs aim at providing a overall development of the members for the future.'
                    />
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='TECHNICALA AND PHOTOGRAPHY CLUB'
                    about='Composition of Movie, Photography and Createch the Technical Club of JUIT provides personal growth,leadership and learning opportunities.'
                    />
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='SPORTS CLUB'
                    about='Sports Club is one of the distinguishable bodies in the JYC which revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
