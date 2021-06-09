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

// Text files
import mapOptionsTxt from "../txtFiles/mapOptionsTxt"
import mapPageTxt from "../txtFiles/mapPageTxt"

// Control files
import color from "../services/color"



const QuestionTable = (props) => {

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
        //console.log("displayRadioValue  ")
        let answersTemp = [...answers]
        var index = answersTemp.findIndex(x => x.q === question.q)
        if (index === -1) {
            // Answer is not found in Answers State
            return ""
        } else {
            // Answer is found in Answers State
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
                <Row key={question.q}>

                    <Col>{question.q}</Col>

                    <Col xs>
                        <form onSubmit={formSubmit}>
                            <div className="form-check form-check-inline" >
                                <input className="form-check-input" id="1" value="1" checked={displayRadioValue(question, props.answers, 1)}
                                    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value="2" checked={displayRadioValue(question, props.answers, 2)}
                                    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value="3" checked={displayRadioValue(question, props.answers, 3)}
                                    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" value="4" checked={displayRadioValue(question, props.answers, 4)}
                                    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
                            </div>
                        </form>
                    </Col>

                    <Col>
                        <Form>
                            <div className="form-group">
                                <input onChange={(e) => props.handlerShortNote(e, question)} type="text" className="form-control"
                                    placeholder="Kirjoita max 50 merkin muistiinpano" value={displayNote(question, props.answers)} />
                            </div>
                        </Form>
                    </Col>

                </Row>
            )}

        </div>

    )
}

export default QuestionTable
