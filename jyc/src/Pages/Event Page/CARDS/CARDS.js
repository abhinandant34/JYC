import React from 'react'
import './CARDS.css'
export default function Card(parse) {
  return (
    
    <div>
    <div className='flip-card'>
       <div className='flip-card-inner'>
         <div className='flip-card-front'>
           <img className = 'event-card-image' src={parse.img}/> 
           <div className='background-blur'>
                    <div className='event-title'>   
                  {parse.title}  
                  </div>
                  <div className='event-date'>  
                     {parse.date}  
                  </div>        
            </div>

           </div> 

         <div className='flip-card-back'>
           <h1>{parse.heading}</h1> 
           <p>{parse.about}</p> 
           
         </div>
       

     </div>
</div>
</div>
 );
  }
