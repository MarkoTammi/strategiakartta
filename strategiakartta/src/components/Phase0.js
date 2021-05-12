// Strategiakartta Phase 0 component

import React from "react"

// components
import HeroElement from "../components/HeroElement"

// Bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
import phase0Txt from "../txtFiles/phase0Txt"
import buttonTxt from "../txtFiles/buttonTxt"

const Phase0 = (props) => {

    return (
        <div>
            <HeroElement 
                headerTxt={phase0Txt[props.version][1001]}
                subHeaderTxt={phase0Txt[props.version][1002]}/>

            <Container>

                <h5>{phase0Txt[props.version][1100]}</h5>
                <p>{phase0Txt[props.version][1101]}</p>
                <p>{phase0Txt[props.version][1102]}</p>
                <p>{phase0Txt[props.version][1103]}</p>
                <p>{phase0Txt[props.version][1104]}</p>
                <p>{phase0Txt[props.version][1105]}</p>
                <p>{phase0Txt[props.version][1106]}</p>
                <p>{phase0Txt[props.version][1107]}</p>
                <p>{phase0Txt[props.version][1108]}</p>
                <p>{phase0Txt[props.version][1109]}</p>
                <p>{phase0Txt[props.version][1110]}</p>

                <Row className="justify-content-md-center">
                    <Col xs>    
                        <Button onClick={props.handlerForward}>{buttonTxt[props.version][1003]}</Button>
                    </Col>
                </Row>
            </Container>           
        </div>
    )
}

export default Phase0