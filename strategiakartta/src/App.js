
// Strategiakartta App.js

import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import GuideStart from "./components/GuideStart"
import MapPage from "./components/MapPage"
//import MapCustomer from "./components/MapCustomer"
import Footer from "./components/Footer"
import SendPDF from "./components/SendPDF"

// Page flow control
import flowControl from "./services/flowControl"


const App = () => {

  // State definitions

  /*     Version mean
        10 = private company - fi 
        11 = test
*/
  const [version, setVersion] = useState(10)

  const [page, setPage] = useState(0)
  const [pageName, setPageName] = useState(flowControl[version][0])

  // [Map]
  const [answers, setAnswers] = useState([])


  // End of State definitions

  // To set name of page guide or map to be rendered 
  useEffect(() => {
    //console.log('useEffect page nro - ' + page)
    setPageName(flowControl[version][page])
  })

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  // Event handler for "back" button
  const handlerBackwards = () => {
    // console.log('handlerBackwards page nro before decrement - ' + page)
    if (page > 0) {
      setPage(page - 1)
      setPageName(flowControl[version][page])
    } else {
      console.log('Page is already 0')
    }
  }

  // Event handler for "forward" button
  const handlerForward = () => {
    // console.log('handlerForward page nro before increment - ' + page)
    setPage(page + 1)
  }

  // Event handler to record and update the Map radio button and short notice answers
  const handlerAnswer = (e, questionId) => {
    const shortTxt = e.target.value
    const obj = []
    obj.push([{ id : questionId, note : shortTxt }])
    console.log('handlerAnswer obj - ' + obj[0])
   // const test = [version.pageName.[{Id : questionId, short : shortTxt}]

/*     const newTxt = [version][pageName][questionId][shortTxt] */
    //setAnswers( ...answers, obj) 
  }


/*   const handlerInputShort = (e, id) => {
    console.log('handlerInputShort' + e.target.value + id)
    setShortTxt(e.target.value)
} */

  const displayPage = () => {
    if (pageName === "MapTarget" || pageName === "MapCustomer" ||
      pageName === "MapProcess" || pageName === "MapResources") {
      return (
        <MapPage
          version={version}
          handlerBackwards={handlerBackwards}
          handlerForward={handlerForward}
          pageName={pageName}
          answers={answers}
          handlerAnswer={handlerAnswer}
        />
      )
    }
    if (pageName === "StartGuide") {
      return (
        <GuideStart
          version={version}
          handlerForward={handlerForward}
          pageName={pageName}
        />
      )
    }
    if (pageName === "SendPDF") {
      return (
        <SendPDF
          version={version}
          handlerBackwards={handlerBackwards}
          pageName={pageName}
        />
      )
    }
  }




  return (
    <div>

      {/* display page specific content */}
      {displayPage()}

      <Footer version={version} />
    </div>
  )
}


export default App;

