import React from 'react';
import './TEAMS.css';
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
        <h1 className='team-heading'>TEAMS</h1>
        <div className= 'container'>
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