// Component to display strategymap questions / options table


import React, { } from "react"

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Text files
import mapOptionsTxt from "../txtFiles/mapOptionsTxt"
import mapPageTxt from "../txtFiles/mapPageTxt"

// Control files
import color from "../services/color"


import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';


const QuestionTable = (props) => {

    // Display "Other what" rows
    const displayOtherWhat = (pageName, otherWhatAnswers) => {

        let otherWhatAnswersTemp = [...otherWhatAnswers]
        let otherWhatToDisplay = []
         
        otherWhatToDisplay = otherWhatAnswersTemp.filter(answer => answer.pageName === pageName)
        //console.log('otherWhatToDisplay', otherWhatToDisplay)

        // Add new empty other what if not visible
        let emptyRowInd = otherWhatToDisplay.findIndex(row => row.mod === false)
        if (emptyRowInd === -1) {
            props.newEmptyOtherWhat()
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
                                        placeholder={mapPageTxt[props.version]["MapGen"][1006]}
                                        value={displayOtherWhatQuestion(answer, props.answers)} />
                                </div>
                            </Form>
                        </Col>

                        {/* MUI Radio start */}
                        <Col>
                            <Tooltip title={<p style={{ fontSize: 15 }}>{mapPageTxt[props.version]["MapGen"][1001]}</p>} arrow enterDelay={1000}>
                                <Radio
                                    checked={displayRadioValue(answer, props.answers, 1)}
                                    onChange={e => props.handlerRadioButton(e, answer, props.answers)}
                                    value="1"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            color: '#c3dfe4',
                                            '&.Mui-checked': {
                                                color: '#c3dfe4',
                                            }
                                        },
                                    }}
                                />
                            </Tooltip>
                            <Tooltip title={<p style={{ fontSize: 15 }}>{mapPageTxt[props.version]["MapGen"][1003]}</p>} arrow enterDelay={1000}>
                                <Radio
                                    checked={displayRadioValue(answer, props.answers, 3)}
                                    onChange={e => props.handlerRadioButton(e, answer, props.answers)}
                                    value="3"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            color: '#7fbfc8',
                                            '&.Mui-checked': {
                                                color: '#7fbfc8',
                                            }
                                        },
                                    }}
                                />
                            </Tooltip>
                            <Tooltip title={<p style={{ fontSize: 15 }}>{mapPageTxt[props.version]["MapGen"][1004]}</p>} arrow enterDelay={1000} >
                                <Radio
                                    checked={displayRadioValue(answer, props.answers, 4)}
                                    onChange={e => props.handlerRadioButton(e, answer, props.answers)}
                                    value="4"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            color: '#358288',
                                            '&.Mui-checked': {
                                                color: '#358288',
                                            }
                                        },
                                    }}
                                />
                            </Tooltip>
                        </Col>
                        {/* MUI Radio end */}


                        {/* Working other what 
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
                        </form> */}

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

    // Display question table radio button value
    const displayRadioValue = (question, answers, value) => {
        //console.log("displayRadioValue  :")
        let answersTemp = [...answers]
        var index = answersTemp.findIndex(x => x.id === question.id)
        //console.log('index: ', index)
        if (index === -1) {
            // Answer is not found in Answers State "not checked"
            return false
        } else {
            // Answer is found in Answers State
            if (parseInt(value) === parseInt(answersTemp[index].prio)) {
                // "checked"
                return true
            } else {
                // "not checked"
                return false
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

/*     const formSubmit = (event) => {
        event.preventDefault();
        console.log("formSubmit", event.target)
    } */



    return (
        <div>

            <Row style={{ backgroundColor: `${color[props.pageName]}`, height: 45, padding: "13px", margin: "0 0 20px" }}>
                <Col md={4}><h5>{mapPageTxt[props.version][props.pageName][1000]}</h5></Col>
                <Col>{mapPageTxt[props.version]["MapGen"][1010]}</Col>
            </Row>

            {mapOptionsTxt[props.version][props.pageName].map((question) =>
                <Row key={question.id}>

                    <Col xs={4}>{question.q}</Col>

                    {/* MUI Radio start */}
                    <Col>
                    <Tooltip title={<p style={{fontSize: 15}}>{mapPageTxt[props.version]["MapGen"][1001]}</p>} arrow enterDelay={1000} >
                        <Radio
                            checked={displayRadioValue(question, props.answers, 1)}
                            onChange={e => props.handlerRadioButton(e, question, props.answers)}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                    color: '#c3dfe4',
                                    '&.Mui-checked': {
                                        color: '#c3dfe4',
                                    }
                                },
                            }}
                        />
                        </Tooltip>
                        <Tooltip title={<p style={{fontSize: 15}}>{mapPageTxt[props.version]["MapGen"][1003]}</p>} arrow enterDelay={1000}>
                        <Radio
                            checked={displayRadioValue(question, props.answers, 3)}
                            onChange={e => props.handlerRadioButton(e, question, props.answers)}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                    color: '#7fbfc8',
                                    '&.Mui-checked': {
                                        color: '#7fbfc8',
                                    }
                                },
                            }}
                        /></Tooltip>
                        <Tooltip title={<p style={{fontSize: 15}}>{mapPageTxt[props.version]["MapGen"][1004]}</p>} arrow enterDelay={1000}>
                        <Radio
                            checked={displayRadioValue(question, props.answers, 4)}
                            onChange={e => props.handlerRadioButton(e, question, props.answers)}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                    color: '#358288',
                                    '&.Mui-checked': {
                                        color: '#358288',
                                    }
                                },
                            }}
                        />
                        </Tooltip>

                    </Col>
                    {/* MUI Radio end */}

                    {/* Working */}
                    {/*    <form onSubmit={formSubmit}>
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
                    </form> */}


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

            {displayOtherWhat(props.pageName, props.otherWhatAnswers)}

            {/* {displayOtherWhat(props.pageName, props.otherWhatAnswers, props.newEmptyOtherWhat)} */}

        </div>
    )
}

export default QuestionTable
