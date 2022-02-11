import React from 'react';
import './Committees.css'       //imported Committees.css the css file for this file
import clublogo1 from './Images/club-1.png'     //imported Committees logos to be shown in the Committees portion
import Card from './Card/Card';     //imported cards made that were to be added in Committees portion

export default function Committees() {      //made Committees function
  return(
    <div className='comittees'>     {/*made a div for the Committees portion */}
        <div className='comittees-heading'>     {/*made a div for "Committees" heading */}
            <h2 className='comittees-head-text'>Comittees</h2>      {/*added heading */}
            <div className='comittees-heading-underline'></div>     {/*created an underline using a div */}
        </div>
        <div className='comittees-all'>     {/*created a div for the whole portion of Committees */}
            <div className='comittees-left-side'>       {/*made another div for left side of the page in Committees portion */}
                <div className='comittees-card top-comittees-card'>     {/*added same class in the Committees for the alignment and also used another class for the top card */}
                    <Card               //added first card imported from Card and passed values and required to it
                    img={clublogo1}
                    heading='LITERARY AND DEBATING CLUB'
                    about='Literary & Dramatics Club is home to all the literature enthusiasts, theater lovers and street play artists.'/>
                </div>
                <div className='comittees-card'>
                    <Card
                    img={clublogo1}
                    heading='THEATRE AND MUSIC CLUB'
                    about='The Theatre and Music Club of JUIT provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'/>
                </div>
                <div className='comittees-card'>
                    <Card
                    img={clublogo1}
                    heading='CULTURAL AND DANCE CLUB'
                    about='As the name suggests, one of the primary aims of the Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'/>
                </div>
            </div>
            <div className='comittees-right-side'>      {/* made another div for right side of the main Committees portion below the heading*/}
                <div className='comittees-card top-committee-card'>     {/* added the same css for all the cards and also added another for special css for the top card */}
                    <Card
                    img={clublogo1}
                    heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
                    about='The clubs aim at providing a overall development of the members for the future.'/>
                </div>
                <div className='comittees-card'>    {/*added just the same css for all the cards */}
                    <Card
                    img={clublogo1}
                    heading='TECHNICALA AND PHOTOGRAPHY CLUB'
                    about='Composition of Movie, Photography and Createch the Technical Club of JUIT provides personal growth,leadership and learning opportunities.'/>
                </div>
                <div className='comittees-card'>
                    <Card
                    img={clublogo1}
                    heading='SPORTS CLUB'
                    about='Sports Club is one of the distinguishable bodies in the JYC which revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'/>
                </div>
            </div>
        </div>
    </div>
  );
}
