import React from 'react';
import './Card.css';    //imported a css file to manipulate the card design
;


export default function Card(parse) {   //made a Card function to be used that will take custion input when used "parse"
  return (
    <div className='committees-card'>   {/* created a div for the club/committees */}
      <img className='committees-logo-image' src={parse.img}/>    {/* image to be passed when used using parse */}
      <div className='committees-card-content'>   {/* created a div for the content to be written in the card apart form image */}
        <div className='committees-card-heading'>   {/* created a div for heading of the club/committee */}
          {parse.heading}   {/* taking input for heading */}
        </div>
        <div className='committees-card-about'>   {/* created a div for the about section of the card */}
          {parse.about}   {/* taking input when used */}
        </div>
      </div>
    </div>
  );
}
