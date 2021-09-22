
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


// Components
//import GuideStart from "./components/GuideStart"
import MapPage from "./components/MapPage"
import MapReady from "./components/MapReady"
import Footer from "./components/Footer"
import SendPDF from "./components/SendPDF"
import ModalPopUp from './components/ModalPopUp';

// Page flow control
import flowControl from "./services/flowControl"

import generalTxt from "./txtFiles/generalTxt"
import helpTxt from "./txtFiles/helpTxt"

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
  const [modalBody ,setModalBody] = useState([])
/*   const [modalBody1, setModalBody1] = useState("")
  const [modalBody2, setModalBody2] = useState("")
  const [modalBody3, setModalBody3] = useState("") */
  const [modalButton1, setModalButton1] = useState("")
  const [user, setUser] = useState({username : "", organization: "", useremail: ""})

  // End of State definitions

  // To set name of page guide or map to be rendered 
  useEffect(() => {
    //console.log('useEffect page nro - ' + page)
    setPageName(flowControl[version][page])
  }, [version, page])

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
        case "MapCustomer":
          return 2
        case "MapProcess":
          return 3
        case "MapResources":
          return 4
        default:
          console.log('App.js findPhase switch - default')
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
    //console.log('howManyAnswersInPhase', numberOfAnswers)
    if (numberOfAnswers === 0 &&
      (pageName === "MapTarget" || pageName === "MapCustomer" ||
        pageName === "MapProcess" || pageName === "MapResources")) {

      setModalTitle(generalTxt[version][1002])

      const modalBodyTemp = []
      modalBodyTemp[0] = generalTxt[version][1003]
      modalBodyTemp[1] = generalTxt[version][1004]
      modalBodyTemp[2] = generalTxt[version][1005]
      setModalBody(modalBodyTemp)

/*       setModalBody1(generalTxt[version][1003])
      setModalBody2(generalTxt[version][1004])
      setModalBody3(generalTxt[version][1005]) */
      setModalButton1(generalTxt[version][1006])
      setShowModal(true)
    } else {
      setShowMap(true)
      setPage(page + 1)
    }
  }

  // Event handler to record short notice answers
  const handlerShortNote = (e, question) => {

    const noteForLength = e.target.value

    if (noteForLength.length < 51) {

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
    
    const questionForLength = e.target.value
    
    // Max length for other what is 30 char
    if (questionForLength.length < 30 ) {

      const otherWhatTarget = e.target.value
      let answersTemp = [...answers]
      let otherWhatAnswersTemp = [...otherWhatAnswers]
      
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
          // setOtherWhatAnswers={setOtherWhatAnswers}
          handlerShortNote={handlerShortNote}
          handlerRadioButton={handlerRadioButton}
          showMap={showMap}
          handlerOtherWhatTarget={handlerOtherWhatTarget}
          findId={findId}
          newEmptyOtherWhat={newEmptyOtherWhat}
          handlerModalHelp={handlerModalHelp}
        />
      )
    }
    /* if (pageName === "StartGuide") {
      return (
        <GuideStart
          version={version}
          handlerForward={handlerForward}
          pageName={pageName}
        />
      )
    } */
    if (pageName === "MapReady") {
      return (
        <MapReady
          answers={answers}
          version={version}
          handlerBackwards={handlerBackwards}
          handlerForward={handlerForward}
          pageName={pageName}
          showMap={showMap}
          user={user}
          handlerUserName={handlerUserName}
          handlerOrganizationName={handlerOrganizationName}
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
          user={user}
        />
      )
    }
  }

  // Close Modal component
  const handleClose = () => {
    setShowModal(false)
    setModalTitle("")
/*     setModalBody1("")
    setModalBody2("")
    setModalBody3("") */
    setModalButton1("")
    setModalBody([])
  }

  // Handler to record organization name
  const handlerOrganizationName = (e) => {
    //console.log('handlerOrganizationName', e.target.value)
    const orgName = e.target.value
    setUser({...user, organization: orgName})
}

  // Handler to record person name who did the map
  const handlerUserName = (e) => {
    //console.log('handlerUserName', e.target.value)
    const usrName = e.target.value
    setUser({...user, username: usrName})
}

  // Modal for help guide
  const handlerModalHelp = () => {

    setModalTitle(helpTxt[version][1100])
    const modalBodyTemp = []
    modalBodyTemp[0] = helpTxt[version][1101]
    modalBodyTemp[1] = helpTxt[version][1102]
    modalBodyTemp[2] = helpTxt[version][1103]
    modalBodyTemp[3] = helpTxt[version][1104]
    modalBodyTemp[4] = helpTxt[version][1105]
    modalBodyTemp[5] = helpTxt[version][1106]
    modalBodyTemp[6] = helpTxt[version][1107]
    modalBodyTemp[7] = helpTxt[version][1108]
    modalBodyTemp[8] = helpTxt[version][1109]
    modalBodyTemp[9] = helpTxt[version][1110]


    setModalBody(modalBodyTemp)
    setModalButton1(generalTxt[version][1006])
    setShowModal(true)

  }

  return (
    <div>

      <ModalPopUp 
        showModal={showModal}
        handleClose={handleClose}
        modalTitle={modalTitle}
/*         modalBody1={modalBody1}
        modalBody2={modalBody2}
        modalBody3={modalBody3} */
        modalButton1={modalButton1}
        modalBody={modalBody}
        />

      {/* display page specific content */}
      {displayPage()}

      <Footer version={version} />

    </div>
  )
}


export default App;

