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
       abouts="The two days panorama' will be a massive spectacle of technical events and shows, as well as outstanding brain demos, with entertaining events like Click and Blink, Spot the Bug, Web Wizard, Valorant, Tech Talks, Code Quest, and Code Trails."
       />
        

         
              
              
          
        </div>

    </div>
  
    
  );
}

export default Events;