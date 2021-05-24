// Strategiakartta StartGuide component

import React from "react"

// components
import HeroElement from "./HeroElement"

// Bootstrap components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import Form from 'react-bootstrap/Form'


// text files
import guideStartTxt from "../txtFiles/guideStartTxt"
import buttonTxt from "../txtFiles/buttonTxt"

const StartGuide = (props) => {

    return (
        <div>
            <HeroElement
                headerTxt={guideStartTxt[props.version][1001]}
                subHeaderTxt={guideStartTxt[props.version][1002]} />

            <Container>

                <h5>{guideStartTxt[props.version][1100]}</h5>
                <p>{guideStartTxt[props.version][1101]}</p>
                <p>{guideStartTxt[props.version][1102]}</p>
                <p>{guideStartTxt[props.version][1103]}</p>
                <p>{guideStartTxt[props.version][1104]}</p>
                <p>{guideStartTxt[props.version][1105]}</p>
                <p>{guideStartTxt[props.version][1106]}</p>
                <p>{guideStartTxt[props.version][1107]}</p>
                <p>{guideStartTxt[props.version][1108]}</p>
                <p>{guideStartTxt[props.version][1109]}</p>
                <p>{guideStartTxt[props.version][1110]}</p>

                <Row className="justify-content-md-center">
                    <Col xs>
                        <OverlayTrigger key="1" overlay={<Tooltip id="1">Jatka</Tooltip>}>
                            <Button onClick={props.handlerForward}>{buttonTxt[props.version][1003]}</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
{/*                 <Row>
                    <Form.Group>
                        <OverlayTrigger overlay={<Tooltip id={`kalle`}>Ei kehitettävää</Tooltip>}>
                            <Form.Check inline name="test" type='radio' id={`test1`} />
                        </OverlayTrigger>
                        <Form.Check inline name="test" type='radio' id={`test2`} />
                        <Form.Check inline name="test" type='radio' id={`test3`} />
                        <Form.Check inline name="test" type='radio' id={`test4`} />
                    </Form.Group>
                </Row> */}
            </Container>
        </div>
    )
}

export default StartGuide