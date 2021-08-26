// Component to display strategymap questions / options table


import React, { useState } from "react"

import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import OverlayTrigger from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Text files
import mapOptionsTxt from "../txtFiles/mapOptionsTxt"
import mapPageTxt from "../txtFiles/mapPageTxt"

// Control files
import color from "../services/color"



const QuestionTable = (props) => {

    // Other what option. Same format that fixed question.
    const otherWhatOriginal = {
        id: "50",
        note: "",
        phase: "",
        prio: "",
        q: "otherWhat",
    }

    // Study if "other what" has been selected in a phase. Return TRUE = is radio clicked and note 
    const otherWhatSelected = (pageName, answers) => {
        //console.log('otherWhatSelected', pageName, answers)

        //no selection or note
        return false
    }

    // Display "Other what" rows if selected
    const displayOtherWhat = (pageName, answers) => {
        //console.log('displayOtherWhat')
        //console.log('answers', answers)
        //console.log('pageName', pageName)

        if (otherWhatSelected(answers)) {
            return (
                <Row>
                    Jotain on valittu
                </Row>
            )
        } else {
            return 
        }
    }

    // Display allways empty "Other what" row at the end of 'table'
    const displayAllwaysEmptyOtherWhat = () => {
        console.log('displayAöllwaysEmptyOtherWhat')
        return (
            <Row>
                <Col>
                    <Form>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Muu mikä? Voit kirjoittaa tähän oman vaihtoehdon" />
                        </div>
                    </Form>
                </Col>
                <Col xs={6}>
                    <Form>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Kirjoita max 50 merkin muistiinpano" />
                        </div>
                    </Form>
                </Col>
            </Row>
        )
    }

    // Display short note
    const displayNote = (question, answers) => {
        let answersTemp = [...answers]
        var index = answersTemp.findIndex(x => x.q === question.q)
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
            console.log('answersTemp[index]',answersTemp[index])
            console.log('value', value)
            if (value == answersTemp[index].prio) {
                return "checked"
            } else {
                return ""
            }
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

                    {/*                     <Col xs>
                        <label htmlFor={`${question.q}_3`}>
                            <input type="radio" name={question.q} value="3" id={`${question.q}_3`}
                                checked={displayRadioValue(question, props.answers, 3)} />
                            <span className="fa-stack">
                                <FontAwesomeIcon icon={faSquare} className="fa-stack-2x" style={{ color: '#a3cfd6' }} />
                                <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: '#47aeb6' }} />
                            </span>
                        </label>
                    </Col>
                    <Col xs>
                        <label htmlFor={`${question.q}_4`}>
                            <input type="radio" name={question.q} value="4" id={`${question.q}_3`}
                                checked={displayRadioValue(question, props.answers, 3)} />
                            <span className="fa-stack">
                                <FontAwesomeIcon icon={faSquare} className="fa-stack-2x" style={{ color: '#47aeb6' }} />
                                <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: '#47aeb6' }} />
                            </span>
                        </label>
                    </Col> */}


                    {/*             <div>
                            <input type="radio" name={question.q} value="3" id={`${question.q}_3`} 
                                checked={displayRadioValue(question, props.answers, 3)}/>
                            <label htmlFor={`${question.q}_3`}>
                                <span>
                                    <FontAwesomeIcon icon={faSquare} className="fa-stack-2x" style={{ color: '#a3cfd6' }} />
                                    <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: '#47aeb6' }} />
                                </span>
                            </label>
                        </div>
                        <div>
                            <input type="radio" name={question.q} value="4" id={`${question.q}_4`} 
                                checked={displayRadioValue(question, props.answers, 4)}/>
                            <label htmlFor={`${question.q}_4`}>
                                <span>
                                    <FontAwesomeIcon icon={faSquare} className="fa-stack-2x" style={{ color: '#47aeb6' }} />
                                    <FontAwesomeIcon icon={faCheck} className="fa-stack-1x" style={{ color: '#47aeb6' }} />
                                </span>
                            </label>
                        </div> */}



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

            {displayOtherWhat(props.pageName, props.answers)}

            {/* Display always one empty "Other what" at the end */}
            <Row>
                <Col xs={4}>
                    <Form>
                        <div className="form-group">
                            <input 
                                onChange={(e) => props.handlerOtherWhatTarget(e, otherWhatOriginal)}
                                type="text" className="form-control"
                                placeholder="Muu mikä? Voit kirjoittaa oman tavoitteen."
                             />
                        </div>
                    </Form>
                </Col>

                <form onSubmit={formSubmit}>
                    <div className="form-check form-check-inline" >
                        <input
                            data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1001]}
                            className="form-check-input" id="1" value="1"
                            type="radio" name={otherWhatOriginal.q} />
                    </div>
                    <div className="form-check form-check-inline">
                        <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1003]}
                            className="form-check-input" value="3"
                            type="radio" name={otherWhatOriginal.q} />
                    </div>
                    <div className="form-check form-check-inline">
                        <input data-toggle="tooltip" title={mapPageTxt[props.version]["MapGen"][1004]}
                            className="form-check-input" value="4"
                            type="radio" name={otherWhatOriginal.q} />
                    </div>
                </form>

                <Col xs={6}>
                    <Form>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder={mapPageTxt[props.version]["MapGen"][1005]} />
                        </div>
                    </Form>
                </Col>
            </Row>
            {/* End of last Other what */}

        </div>
    )
}

export default QuestionTable
