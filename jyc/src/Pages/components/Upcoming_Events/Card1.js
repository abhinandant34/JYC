import React from 'react'
import image from './image/event.jpg'
import image2 from './image/event2.jpg'
import image3 from './image/event3.jpg'
import './Card1.css'
import Eventcard from './Eventcard';
export default function Card1() {
  return (
    <div className='cards-ue'>
       
                <div className='card-ue'>     
                    <Eventcard                  
                    img={image}
                    heading='QUALIFA'
                    // date='2022'
                    about='The virtual edition of JYC first-ever literary , theatrical and musical events.'/>
                </div>
                <div className='card-ue'>
                    <Eventcard
                    img={image2}
                    heading='WELLNESS WEEK'
                    // date='2022'
                    about='Unite people through common goals of community awareness, prompting a better quality of life'/>
                </div>
                <div className='card-ue'>
                    <Eventcard
                    img={image3}
                    heading='ATKHELIYAN'
                    // date='2022'
                    about='From showing best dance moves to dressing up in the best attires, a chance to showcase talent with Bollywood tadka.
                    '/>
                </div>
    </div>    
  )
}