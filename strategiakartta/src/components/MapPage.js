// Kehityskartta phase component


import React, { useLayoutEffect, useEffect } from "react"

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


    const displaySelected = (showMap) => {
        if (showMap == true) {
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

    return (
        <div>

            <HeroElement
                headerTxt={mapPageTxt[props.version][props.pageName][1001]}
                subHeaderTxt={mapPageTxt[props.version][props.pageName][1002]}
                pageName={props.pageName} />

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
                    handlerShortNote={props.handlerShortNote}
                    handlerRadioButton={props.handlerRadioButton}
                    handlerOtherWhatTarget={props.handlerOtherWhatTarget}
                />

                <Row className="justify-content-md-center">
                    <Col xs>
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                        <Button onClick={props.handlerForward}>{buttonTxt[props.version][1002]}</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default MapTarget