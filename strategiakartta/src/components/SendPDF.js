// Ready phase component

import React from "react"

// components
import Selected from "./Selected"

// Bootstrap component
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
import generalTxt from "../txtFiles/generalTxt"
import buttonTxt from "../txtFiles/buttonTxt"



const sendPdf = (props) => {
    //(console.log("sendPDF component")

    return (
        <div style={{ margin: "40px" }}>
            <Container>
                <Selected
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}
                />

                <Col style={{ marginTop: "60px", marginBottom: "20px" }}>
                    {generalTxt[props.version][1001]}
                </Col>

                <Row className="justify-content-md-center">
                    <Col xs>
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default sendPdf