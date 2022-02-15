import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';      // aise dalna hai file ka link, make sure krna ki folder achi tarah se hirearchy mai rahe
import ClubsComm from './components/Clubs-Comm/Clubs-Comm';
function App() {
  return (
    <div className="App">
      <Header/>
      <ClubsComm/>
    </div>
  );
}

export default App;
