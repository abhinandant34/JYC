 import React from 'react'
import './Events.css'
import m from './images/m.jpeg'
import Card from './Card/Card';

function Events() {
  return (
    <div className='events'>
        <h1 className='event-heading'>Events</h1>
        <div className= 'fcontainer'>
     {/* EVENT 3 */}
      
        <Card
       image ={m}
       header="Murious"
       abouts="The most awaited techfest of the year-'MURIOUS'   is organised and hosted by the tech club of JUIT.From gaming to coding, robotics to tech talks this event is one of its kind."
       />
        

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;