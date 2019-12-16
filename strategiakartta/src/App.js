// MarkoT Strategiakartta App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import HeroElement from "./components/HeroElement"
import GenGuide from "./components/GenGuide"
import Phase1 from "./components/Phase1"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"


const App = () => {

    const [phase, setPhase] = useState(0)
    const [lang, setLang] = useState('fi')


    // Event handler for "back" button
    const handlerBackwards = () => {
      console.log('handlerBack')
      if (phase > 0) {
        setPhase(phase - 1)
      } else {
        console.log('phase is already 0')
      }
    }

    // Event handler for "forward" button
    const handlerForward = () => {
      console.log('handlerForward')
      if (phase < 1) {
        setPhase(phase + 1)
      } else {
        console.log('phase is already 1')
      }
    }

const displayPhase = () => {
  switch (phase) {
      case 0:
        return (
          <>
            <HeroElement lang={lang} />
            <GenGuide lang={lang} />
          </>
        )
      case 1:
        return (
          <>
            <Phase1 lang={lang} />
          </>
        )
  }
}


    return (
      <div>

        {/* display phase specific content */}
        {displayPhase()}

        <Buttons 
          handlerBackwards={handlerBackwards}
          handlerForward={handlerForward}
          />
        <Footer lang={lang} />
      </div>  
    )
}


export default App;

