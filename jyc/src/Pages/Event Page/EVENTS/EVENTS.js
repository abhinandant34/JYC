import React from 'react'
import './EVENTS.css'
import event3 from './images/event3.jpg'
import event6 from './images/event6.jpg'
import Card from '../CARDS/CARDS';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='event-page'>
      <Header/>
      <div className="events-head-bg"></div>
    <div className='events-jyc'>
      <div className='events-heading'>
        Events
        <div className='eventsheading-u'/>
      </div>
      <div className='events-container'>
        {/* EVENT 6 */}
        <Card
          img={event3}
          title="EVENT NAME"
          date="12/2/2022 " 
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

        <Card
       img ={event6}
       title="EVENT NAME"
       date="12/2/2022"
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      
        <Card
       img ={event3}
       title="EVENT NAME"
       date="12/2/2022 "
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      
        <Card
       img ={event6}
       title="EVENT NAME"
       date="12/2/2022 "
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
     
        <Card
       img ={event3}
       title="EVENT NAME"
       date="12/2/2022 "
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
       
        <Card
       img ={event6}
       title="EVENT NAME"
       date="12/2/2022 "
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

      </div>
    </div>
      <Footer/>
    </div>

  );
}

export default EVENTS;