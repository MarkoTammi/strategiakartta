
// Strategiakartta App.js

import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import GuideStart from "./components/GuideStart"
import MapPage from "./components/MapPage"
import MapReady from "./components/MapReady"
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
  const [answers, setAnswers] = useState([])

  // End of State definitions

  // To set name of page guide or map to be rendered 
  useEffect(() => {
    //console.log('useEffect page nro - ' + page)
    setPageName(flowControl[version][page])
  })

  // Render page always to top
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

  // Event handler to record short notice answers
  const handlerShortNote = (e, question) => {
    const shortTxt = e.target.value
    let answersTemp = [...answers]
    let ans = {}
    ans.phase = question.phase
    ans.note = shortTxt
    ans.id = question.id
    ans.q = question.q
    var index = answersTemp.findIndex(x => x.q === ans.q)

    if (index === -1) {
      // Answer is not found in State
      ans.prio = ""
      answersTemp[answersTemp.length] = ans
      setAnswers(answersTemp)

    } else {
      // Answer is found in State
      ans.prio = answersTemp[index].prio
      answersTemp[index] = ans
      setAnswers(answersTemp)
    }
  }

  // Event handler to recors radio button answer
  const handlerRadioButton = (e, question) => {
    let answersTemp = [...answers]
    //console.log("handRadio question : ", question)
    let ans = {}
    ans.q = question.q
    ans.prio = e.target.value
    var index = answersTemp.findIndex(x => x.q === ans.q)

    if (index === -1) {
      // Answer is not found in State
      ans.note = ""
      ans.phase = question.phase
      ans.id = question.id
      answersTemp[answersTemp.length] = ans
      setAnswers(answersTemp)
    } else {
      // Answer is found in State
      ans.phase = answersTemp[index].phase
      ans.note = answersTemp[index].note
      ans.id = answersTemp[index].id
      answersTemp[index] = ans
      setAnswers(answersTemp)
    }
  }


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
          handlerShortNote={handlerShortNote}
          handlerRadioButton={handlerRadioButton}
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
    if (pageName === "MapReady") {
      return (
        <MapReady
          answers={answers}
          version={version}
          handlerBackwards={handlerBackwards}
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

