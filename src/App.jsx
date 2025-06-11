// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Tile from './components/Tile';
import events from './events';


const App = () => {

  return (
    <div className="App">
      
      <div className="header">
        <div className="inner-header">
          <h1>Nearby Niches & Nerds</h1>
          <h2>Your resource on local conventions and meetups!</h2>
        </div>
      </div>

      <div className = 'displayed-tiles'>
        {events.map((event) => (<Tile key={event.title}{...event} />))}
      </div>

    </div>
  )
}

export default App
