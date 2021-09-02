
// Strategiakartta App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap component
/* import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/Container" */
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"


// Components
import GuideStart from "./components/GuideStart"
import MapPage from "./components/MapPage"
import MapReady from "./components/MapReady"
import Footer from "./components/Footer"
import SendPDF from "./components/SendPDF"
import ModalPopUp from './components/ModalPopUp';

// Page flow control
import flowControl from "./services/flowControl"

import generalTxt from "./txtFiles/generalTxt"
import MapTarget from './components/MapPage';


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
  const [showMap, setShowMap] = useState(false)
  const [otherWhatAnswers, setOtherWhatAnswers] = useState([])
  const [otherWhatId, setOtherWhatId] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalBody1, setModalBody1] = useState("")
  const [modalBody2, setModalBody2] = useState("")
  const [modalBody3, setModalBody3] = useState("")
  const [modalButton1, setModalButton1] = useState("")


  // End of State definitions

  // To set name of page guide or map to be rendered 
  useEffect(() => {
    //console.log('useEffect page nro - ' + page)
    setPageName(flowControl[version][page])
  })

  // Render page always to top when pageName state is changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageName])

  // Find free id for new "other what" question
  const findId = () => {
    let otherWhatIdTemp = [...otherWhatId]
    let newId = otherWhatIdTemp.length + 1001
    otherWhatIdTemp.push(newId)
    setOtherWhatId(otherWhatIdTemp)
    return newId
  }

  const newEmptyOtherWhat = () => {
    let otherWhatAnswersTemp = [...otherWhatAnswers]
    const findId = () => {
      let otherWhatIdTemp = [...otherWhatId]
      let newId = otherWhatIdTemp.length + 1001
      otherWhatIdTemp.push(newId)
      setOtherWhatId(otherWhatIdTemp)
      return newId
    }

    // Conversion from pageName to phase number
    const findPhase = () => {
      switch (pageName) {
        case "MapTarget":
          return 1
          break
        case "MapCustomer":
          return 2
          break
        case "MapProcess":
          return 3
          break
        case "MapResources":
          return 4
          break
      }
    }

    const otherWhatOriginal = {
      id: findId(),
      q: "",
      note: "",
      prio: 0,
      mod: false,
      phase: findPhase(),
      pageName: pageName
    }
    otherWhatAnswersTemp.push(otherWhatOriginal)
    setOtherWhatAnswers(otherWhatAnswersTemp)
  } // end -- newEmptyOtherWhat

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
    let numberOfAnswers = howManyAnswersInPhase()
    console.log('howManyAnswersInPhase', numberOfAnswers)
    if (numberOfAnswers === 0 && 
          (pageName === "MapTarget" || pageName === "MapCustomer" ||
          pageName === "MapProcess" || pageName === "MapResources")) {
      setModalTitle(generalTxt[version][1002])
      setModalBody1(generalTxt[version][1003])
      setModalBody2(generalTxt[version][1004])
      setModalBody3(generalTxt[version][1005])
      setModalButton1(generalTxt[version][1006])
      setShowModal(true)
    } else {
      setShowMap(true)
      setPage(page + 1)
    }
  }

  // Event handler to record short notice answers
  const handlerShortNote = (e, question) => {

    let ans = {}
    ans.note = e.target.value

    ans.id = question.id
    ans.phase = question.phase
    ans.pageName = question.pageName

    let answersTemp = [...answers]
    let indexAns = answersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))

    let otherWhatAnswersTemp = [...otherWhatAnswers]
    let indexOth = otherWhatAnswersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))

    if (ans.id >= 1000) {
      ans.q = otherWhatAnswersTemp[indexOth].q
      ans.mod = true
      } else {
      ans.q = question.q
      ans.mod = true
    }

    // Update state - Answers
    if (indexAns === -1) {
      // Answer is not found in State
      ans.prio = 0
      answersTemp[answersTemp.length] = ans
    } else {
      // Answer is found in State
      ans.prio = answersTemp[indexAns].prio
      answersTemp[indexAns] = ans
    }
    setAnswers(answersTemp)

    // Update state - OtherWhatAnswers
    if (ans.id >= 1000) {
      if (indexOth === -1) {
        // Answer is not found in State
        ans.prio = answersTemp[indexAns].prio
        otherWhatAnswersTemp[otherWhatAnswersTemp.length] = ans
        } else {
        // Answer is found in State
        otherWhatAnswersTemp[indexOth] = ans
      }
      setOtherWhatAnswers(otherWhatAnswersTemp)
    }
  }

  // Event handler to recors radio button answer
  const handlerRadioButton = (e, question) => {

    let ans = {}
    ans.prio = e.target.value

    ans.id = question.id
    ans.q = question.q
    ans.phase = question.phase
    ans.pageName = question.pageName

    let answersTemp = [...answers]
    let indexAns = answersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))

    let otherWhatAnswersTemp = [...otherWhatAnswers]
    let indexOth = otherWhatAnswersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))

    if (ans.id >= 1000) {
      ans.q = otherWhatAnswersTemp[indexOth].q
      ans.mod = true
    } else {
      ans.q = question.q
      ans.mod = true
    }
    
    // Update state - Answers
    if (indexAns === -1) {
      // Answer is not found in State
      ans.note = ""
      answersTemp[answersTemp.length] = ans
      } else {
      // Answer is found in State
      ans.note = answersTemp[indexAns].note
      answersTemp[indexAns] = ans
    }
    setAnswers(answersTemp)

    // Update state - OtherWhatAnswers
    if (ans.id >= 1000) {
      if (indexOth === -1) {
        // Answer is not found in State
        ans.note = ""
        otherWhatAnswersTemp[otherWhatAnswersTemp.length] = ans
        } else {
        // Answer is found in State
        ans.note = otherWhatAnswersTemp[indexOth].note
        otherWhatAnswersTemp[indexOth] = ans
      }
      setOtherWhatAnswers(otherWhatAnswersTemp)
    }

  }

  // Event handler to record "other what" question / target
  const handlerOtherWhatTarget = (e, answer) => {
    
    console.log('START - handlerOtherWhatTarget')

    const otherWhatTarget = e.target.value
    let answersTemp = [...answers]
    let otherWhatAnswersTemp = [...otherWhatAnswers]
    console.log('handlerOtherWhatTarget - e.target.value :', e.target.value)
    console.log('handlerOtherWhatTarget - answer :', answer)
    
    let ans = {}
    ans.id = answer.id
    ans.q = otherWhatTarget
    ans.mod = true
    ans.pageName = answer.pageName
    ans.phase = answer.phase

    // Update state - Answers
    const indexAnswers = answersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))
    if (indexAnswers === -1) {
      // Answer is not found in State
      ans.note = answer.note
      ans.prio = 0
      answersTemp[answersTemp.length] = ans
    } else {
      // Answer is found in State
      ans.note = answersTemp[indexAnswers].note
      ans.prio = answersTemp[indexAnswers].prio
      answersTemp[indexAnswers] = ans
    }
    setAnswers(answersTemp)

    // Update state - otherWhatAnswers
    const indexOtherWhatAnswers = otherWhatAnswersTemp.findIndex(x => parseInt(x.id) === parseInt(ans.id))
    otherWhatAnswersTemp[indexOtherWhatAnswers] = ans
    setOtherWhatAnswers(otherWhatAnswersTemp)

  }


  // return how many answers per map phase
  const howManyAnswersInPhase = () => {
    let answersTemp = [...answers]
    let phaseAnswers = answersTemp.filter((answer) => answer.pageName === pageName)
    let index = phaseAnswers.length
    return index
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
          otherWhatAnswers={otherWhatAnswers}
          setOtherWhatAnswers={setOtherWhatAnswers}
          handlerShortNote={handlerShortNote}
          handlerRadioButton={handlerRadioButton}
          showMap={showMap}
          handlerOtherWhatTarget={handlerOtherWhatTarget}
          findId={findId}
          newEmptyOtherWhat={newEmptyOtherWhat}
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
          showMap={showMap}
        />
      )
    }
    if (pageName === "SendPDF") {
      return (
        <SendPDF
          version={version}
          handlerBackwards={handlerBackwards}
          pageName={pageName}
          answers={answers}
        />
      )
    }
  }

  // Close Modal component
  const handleClose = () => {
    setShowModal(false)
    setModalTitle("")
    setModalBody1("")
    setModalBody2("")
    setModalBody3("")
    setModalButton1("")
  }


  return (
    <div>

      <ModalPopUp 
        showModal={showModal}
        handleClose={handleClose}
        modalTitle={modalTitle}
        modalBody1={modalBody1}
        modalBody2={modalBody2}
        modalBody3={modalBody3}
        modalButton1={modalButton1}
        />

      {/* display page specific content */}
      {displayPage()}

      <Footer version={version} />

    </div>
  )
}


export default App;

