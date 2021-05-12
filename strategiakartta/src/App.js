
// Strategiakartta App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import Phase0 from "./components/Phase0"
import Phase1 from "./components/Phase1"
import Footer from "./components/Footer"


const App = () => {

    // State definitions

    const [phase, setPhase] = useState(0)

/*     Version mean
          10 = yksityinen 
          11 = test eng
 */    
    const [version, setVersion] = useState(10)

    // End of State definitions

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
      //console.log('handlerForward')
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
            <Phase0
              handlerForward={handlerForward}
              version={version}
              />
          </>
        )
      case 1:
        return (
            <Phase1 
              version={version}
              handlerBackwards={handlerBackwards}
              handlerForward={handlerForward}
              />
        )
        default:
            console.log("Phase selection switch - case error")
  }
}


    return (
      <div>

        {/* display phase specific content */}
        {displayPhase()}

        <Footer version={version} />
      </div>  
    )
}


export default App;

