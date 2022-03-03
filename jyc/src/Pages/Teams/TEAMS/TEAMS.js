import React from 'react';
import './TEAMS.css';
import MayankKumar from './images/MayankKumar.jpg';
import Akarshan from './images/Akarshan.jpg';
import HimanshuSharma from './images/HimanshuSharma.jpeg';
import Shubh from './images/Shubh.jpeg';
import Prakul from './images/Prakul.jpg';
import Ayush from './images/Ayush.jpg';
import image from './images/image.png';
import Card from '../TEAMS-CARDS/TEAMS-CARDS';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='teams-page'>
      <Header/>
      <div className='teams-head-bg'/>
    <div className='teams'>
        <div className='team-heading'>
          Teams
          <div className='team-heading-underline'/>
        </div>
        <div className= 'container'>
       <Card
       img ={MayankKumar}
       name="Mayank Kumar"
       text="Always learning something new ;-)"
       instagram='//instagram.com/racinmk?utm_medium=copy_link'
       twitter='//  twitter.com/4n0nym0u5_29?t=XU6CDMVb7X4-LhSg3Jjjtg&s=09'
       linkedin='// www.linkedin.com/in/mayank-kumar-375600214'/>
       <Card
       img ={HimanshuSharma}
       name="Himanshu Sharma"
       text="lorem bla bla bla "
       instagram='//www.instagram.com/himanshu.shrma_'
       twitter='//twitter.com/HimanshuShrma19?t=rtRhfCW6gqtrznssws-Wag&s=08'
       linkedin='/teams'/>
        <Card
       img ={Akarshan}
       name="Akarshan Singh"
       text="lorem bla bla bla "
       instagram='//www.instagram.com/_aakarshan_22__/'
       twitter='//twitter.com/aakarshan221003'
       linkedin='//www.linkedin.com/in/aakarshan-singh-2b076a228/'/>
        <Card
       img ={Shubh}
       name="Shubh"
       text="lorem bla bla bla "
       instagram='//www.instagram.com/_shubh.28/'
       twitter='//twitter.com/Shubh26045994'
       linkedin='/teams'/>
        <Card
       img ={Prakul}
       name="Prakul Chauhan"
       text="lorem bla bla bla "
       instagram='//www.instagram.com/prakul.rar'
       twitter='/teams'
       linkedin='/teams'/>
        <Card
       img ={Ayush}
       name="Ayush"
       text="lorem bla bla bla "
       instagram='//www.instagram.com/aayusshhh_22/'
       twitter='//twitter.com/AayushG34713573'
       linkedin='//www.linkedin.com/in/aayush-gupta-2ba611233/'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
       <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
        <Card
       img ={image}
       name="YODA"
       text="lorem bla bla bla "
       instagram='//instagram.com'
       twitter='//twitter.com'
       linkedin='//linkedin.com'/>
       
       
       
       
       </div>

    </div>
    <Footer/>
    </div>
  );
}

export default EVENTS;