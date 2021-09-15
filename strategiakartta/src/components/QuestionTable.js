// Component to display strategymap questions / options table


import React, { } from "react"

//import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
//import InputGroup from 'react-bootstrap/InputGroup'
//import FormControl from 'react-bootstrap/FormControl'
//import OverlayTrigger from 'react-bootstrap/Overlay'
//import Tooltip from 'react-bootstrap/Tooltip'
//import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import { faSquare } from "@fortawesome/free-regular-svg-icons"
//import { faCheck } from "@fortawesome/free-solid-svg-icons"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Text files
import mapOptionsTxt from "../txtFiles/mapOptionsTxt"
import mapPageTxt from "../txtFiles/mapPageTxt"

// Control files
import color from "../services/color"



const QuestionTable = (props) => {

    // Display "Other what" rows
    const displayOtherWhat = (pageName, otherWhatAnswers, newEmptyOtherWhat) => {
    //const displayOtherWhat = (pageName, otherWhatAnswers, setOtherWhatAnswers, newEmptyOtherWhat) => {

        //console.log('START - displayOtherWhat')
/* 
        const findPhase = (pageName) => {
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
        } */

        let otherWhatAnswersTemp = [...otherWhatAnswers]
        let otherWhatToDisplay = []
         
        // otherWhatToDisplay = otherWhatAnswersTemp.filter(answer => answer.pageName === pageName)
        otherWhatToDisplay = otherWhatAnswersTemp.filter(answer => answer.pageName === pageName)
        //console.log('otherWhatToDisplay', otherWhatToDisplay)

        let emptyRowInd = otherWhatToDisplay.findIndex(row => row.mod === false)
        //console.log('emptyRowInd', emptyRowInd)

        if (emptyRowInd === -1) {
            newEmptyOtherWhat()
        }
        

        return (
            <div>
                {otherWhatToDisplay.map((answer) =>
                    <Row key={answer.id}>
                        <Col xs={4}>
                            <Form>
                                <div className="form-group">
                                    <input onChange={(e) => props.handlerOtherWhatTarget(e, answer)}
                                        type="text" className="form-control"
                                        placeholder="Voit kirjoittaa tähän oman vaihtoehdon"
                                        value={displayOtherWhatQuestion(answer, props.answers)} />
                                </div>
                            </Form>
                        </Col>

                        <form onSubmit={formSubmit}>
                            <div className="form-check form-check-inline" >
                                <input
                                    data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1001]}
                                    className="form-check-input" value="1" checked={displayRadioValue(answer, props.answers, 1)}
                                    type="radio" name={answer.id} onChange={e => props.handlerRadioButton(e, answer, props.answers)} />
                            </div>
                            <div className="form-check form-check-inline">
                                <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1003]}
                                    className="form-check-input" value="3" checked={displayRadioValue(answer, props.answers, 3)}
                                    type="radio" name={answer.id} onChange={e => props.handlerRadioButton(e, answer, props.answers)} />
                            </div>

                            <div className="form-check form-check-inline">
                                <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1004]}
                                    className="form-check-input" value="4" checked={displayRadioValue(answer, props.answers, 4)}
                                    type="radio" name={answer.id} onChange={e => props.handlerRadioButton(e, answer, props.answers)} />
                            </div>
                        </form>

                        <Col xs={6}>
                            <Form>
                                <div className="form-group">
                                    <input onChange={(e) => props.handlerShortNote(e, answer)}
                                        type="text" className="form-control"
                                        placeholder={mapPageTxt[props.version]["MapGen"][1005]}
                                        value={displayNote(answer, props.answers)} />
                                </div>
                            </Form>
                        </Col>

                    </Row>
                )}
            </div>
        )
    }


    // Display short note
    const displayNote = (question, answers) => {
        //console.log('displayNote - question', question)
        //console.log('displayNote - answer', answers)

        let answersTemp = [...answers]
        let index = answersTemp.findIndex(x => x.id === question.id)
        if (index === -1) {
            // Answer is not found in State
            return ""
        } else {
            // Answer is found in State
            return answersTemp[index].note
        }
    }

    // Display radio value
    const displayRadioValue = (question, answers, value) => {
        //console.log("displayRadioValue  :")
        let answersTemp = [...answers]
        var index = answersTemp.findIndex(x => x.id === question.id)
        //console.log('index: ', index)
        if (index === -1) {
            // Answer is not found in Answers State
            return ""
        } else {
            // Answer is found in Answers State
            if (parseInt(value) === parseInt(answersTemp[index].prio)) {
                return "checked"
            } else {
                return ""
            }
        }
    }

    // Display otherWhat target/question/answer
    const displayOtherWhatQuestion = (question, answers) => {
        //console.log('START - displayOtherWhatQuestion')
        let answersTemp = [...answers]
        let index = answersTemp.findIndex(x => x.id === question.id)
        if (index === -1) {
            // Answer is not found in State
            return ""
        } else {
            // Answer is found in State
            return answersTemp[index].q
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log("formSubmit", event.target)
    }



    return (
        <div>

            <Row style={{ backgroundColor: `${color[props.pageName]}`, height: 45, padding: "13px", margin: "0 0 20px" }}>
                <Col md="auto"><h5>{mapPageTxt[props.version][props.pageName][1000]}</h5></Col>
                <Col>{mapPageTxt[props.version]["MapGen"][1010]}</Col>
            </Row>

            {mapOptionsTxt[props.version][props.pageName].map((question) =>
                <Row key={question.id}>

                    <Col xs={4}>{question.q}</Col>

                    <form onSubmit={formSubmit}>
                        <div className="form-check form-check-inline" >
                            <input
                                data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1001]}
                                className="form-check-input" value="1" checked={displayRadioValue(question, props.answers, 1)}
                                type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                        </div>
                        <div className="form-check form-check-inline">
                            <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1003]}
                                className="form-check-input" value="3" checked={displayRadioValue(question, props.answers, 3)}
                                type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                        </div>

                        <div className="form-check form-check-inline">
                            <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1004]}
                                className="form-check-input" value="4" checked={displayRadioValue(question, props.answers, 4)}
                                type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                        </div>
                    </form>


                    <Col xs={6}>
                        <Form>
                            <div className="form-group">
                                <input onChange={(e) => props.handlerShortNote(e, question)} 
                                    type="text" className="form-control"
                                    placeholder={mapPageTxt[props.version]["MapGen"][1005]} 
                                    value={displayNote(question, props.answers)} />
                            </div>
                        </Form>
                    </Col>

                </Row>
            )}

            {displayOtherWhat(props.pageName, props.otherWhatAnswers, props.newEmptyOtherWhat)}

            {/* {displayOtherWhat(props.pageName, props.otherWhatAnswers, props.setOtherWhatAnswers, props.newEmptyOtherWhat)} */}


        </div>
    )
}

export default QuestionTable
