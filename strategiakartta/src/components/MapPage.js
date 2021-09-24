// Strategymap phase component


import React, {  } from "react"

// components
import HeroElement from "./HeroElement"
import QuestionTable from "./QuestionTable"
import Selected from "./Selected"

// Bootstrap component
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
import mapPageTxt from "../txtFiles/mapPageTxt"
import buttonTxt from "../txtFiles/buttonTxt"


const MapTarget = (props) => {

    // Diplay selected targets and notes
    const displaySelected = (showMap) => {
        if (showMap === true) {
            return (
                <>
                <h5>Vastauksesi tähän mennessä</h5>
                <Selected
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}
                />
                <br/>
                </>
            )
        }
    }
    // Display "back" button if other page than MapTarget 
    const displayBackwardsButton = () => {
        if (props.pageName !== "MapTarget")
            return (
                <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
            )
    }

    return (
        <div>

            <HeroElement
                headerTxt={mapPageTxt[props.version][props.pageName][1001]}
                subHeaderTxt={mapPageTxt[props.version][props.pageName][1002]}
                pageName={props.pageName} 
                handlerModalHelp={props.handlerModalHelp}
                version={props.version}/>

            <Container>

                <p>{mapPageTxt[props.version][props.pageName][1003]}</p>
                <p>{mapPageTxt[props.version][props.pageName][1004]}</p>
                <p>{mapPageTxt[props.version][props.pageName][1005]}</p>
            

            {displaySelected(props.showMap)} 

            </Container>

            <Container>
                <QuestionTable
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}
                    otherWhatAnswers={props.otherWhatAnswers}
                    handlerShortNote={props.handlerShortNote}
                    handlerRadioButton={props.handlerRadioButton}
                    handlerOtherWhatTarget={props.handlerOtherWhatTarget}
                    findId={props.findId}
                    newEmptyOtherWhat={props.newEmptyOtherWhat}
                />

                <Row className="justify-content-md-center">
                    <Col xs>
                        {displayBackwardsButton()}
                        <Button onClick={props.handlerForward}>{buttonTxt[props.version][1002]}</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default MapTarget