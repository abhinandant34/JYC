import React from 'react';
import ClubsComm from './components/Clubs-Comm/Clubs-Comm';
import Header from './components/Header/Header';
import Faculty_Coordinator from './components/Faculty_Coordinator/Faculty_Coordinator';
import JYC_Team from './components/JYC_Team/JYC_Team';
import Upcoming_Events from './components/Upcoming_Events/Upcoming_Events';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
export default function Homepage() {
  return (
    <div>
      <Header/>
      <Landing/>
      <About/>
      <ClubsComm/>
      <Upcoming_Events/>
      <Faculty_Coordinator/>
      <JYC_Team/>
      <Footer/>
    </div>
  )
};
