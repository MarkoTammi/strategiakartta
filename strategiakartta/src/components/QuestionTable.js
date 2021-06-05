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


/* 
<Col xs>
<div className="form-check form-check-inline" >
    <input className="form-check-input" id="1" value="1" checked={displayRadioValue(question, props.answers)} 
    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
</div>
<div className="form-check form-check-inline">
    <input className="form-check-input" value="2" checked={displayRadioValue(question, props.answers)} 
    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question,props.answers)} />
</div>
<div className="form-check form-check-inline">
    <input className="form-check-input" value="3" checked={displayRadioValue(question, props.answers)} 
    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
</div>
<div className="form-check form-check-inline">
    <input className="form-check-input" value="4" checked={displayRadioValue(question, props.answers)} 
    type="radio" name={question.q} onChange={e => props.handlerRadioButton(e, question, props.answers)} />
</div>
</Col>
 */

{/*             <Row>
                <Form.Group>
                    <OverlayTrigger overlay={<Tooltip id={`kalle`}>Ei kehitettävää</Tooltip>}>
                        <Form.Check inline name="test" type='radio' id={`test1`} />
                    </OverlayTrigger>
                    <Form.Check inline name="test" type='radio' id={`test2`} />
                    <Form.Check inline name="test" type='radio' id={`test3`} />
                    <Form.Check inline name="test" type='radio' id={`test4`} />
                </Form.Group>
            </Row>
            <Row>
                <Form>
                    <Form.Group>
                        <OverlayTrigger key={`tooltip`} placement='top' overlay={<Tooltip id="test">Ei kehitettävää</Tooltip>}>
                            <Form.Check inline name="q" type='radio' id={`5`} />

                        </OverlayTrigger>
                        <Form.Check inline name="q" type='radio' id={`6`} />
                        <Form.Check inline name="q" type='radio' id={`7`} />
                        <Form.Check inline name="q" type='radio' id={`8`} />

                    </Form.Group>
                </Form>

            </Row> */}


{/*   <Table borderless>
                <thead>
                    <tr style={{ backgroundColor: '#f77433' }}>
                        <th>{answerOptionsTxt[props.version][1011]}</th>
                        <th>{answerOptionsTxt[props.version][1010]}</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {questionOptionsTxt[props.version].map((question) =>
                        <tr key={question.id}>
                            <td>{question.q}</td>
                            <td>
                                <Form>
                                    <Form.Group>
                                    <OverlayTrigger key={`${question.q}-1`} overlay={ <Tooltip id={`${question.id}-1`}>Ei kehitettävää</Tooltip>}>
                                    <Form.Check inline name={question.q} type='radio' id={`${question.id}-1`} />
                                    </OverlayTrigger>
                                    <Form.Check inline name={question.q} type='radio' id={`${question.id}-2`} />
                                    <Form.Check inline name={question.q} type='radio' id={`${question.id}-3`} />
                                    <Form.Check inline name={question.q} type='radio' id={`${question.id}-4`} />

                                    </Form.Group>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Kirjoita max 50 merkin muistiinpano" />
                                    </div>
                                </Form>
                            </td>
                        </tr>

                    )}
                </tbody>
            </Table> */

/*
<OverlayTrigger key="1" overlay={ <Tooltip id="1">Jatka</Tooltip>}>
<Button onClick={props.handlerForward}>{buttonTxt[props.version][1003]}</Button>
</OverlayTrigger> */

/*
<td>
<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group" role="group" aria-label="First group">
        <OverlayTrigger
            key='1'
            placement='top'
            overlay={
                <Tooltip id='1' className='show'>Ei kehittettävää</Tooltip>
            }>

        <button type="button" className="btn btn-outline-secondary m-1">1</button>
        </OverlayTrigger>
        <button type="button" className="btn btn-outline-secondary m-1">2</button>
        <button type="button" className="btn btn-outline-secondary m-1">3</button>
        <button type="button" className="btn btn-outline-secondary m-1">4</button>
    </div>
</div>
        </td> */}