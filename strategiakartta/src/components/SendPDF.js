// Ready phase component

import React from "react"

// components
import HeroElement from "./HeroElement"

// Bootstrap component
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
import mapPageTxt from "../txtFiles/mapPageTxt"
import buttonTxt from "../txtFiles/buttonTxt"



const sendPdf = (props) => {
    console.log("sendPDF component")

    return (
        <div>

{/*            <HeroElement
                 headerTxt={mapPageTxt[props.version][props.pageName][1001]}
                subHeaderTxt={mapPageTxt[props.version][props.pageName][1002]} /> */}

            <Container>
                <h5>SendPDF page</h5>

{/*                 <p>{mapPageTxt[props.version][props.pageName][1003]}</p>
                <p>{mapPageTxt[props.version][props.pageName][1004]}</p>
                <p>{mapPageTxt[props.version][props.pageName] [1005]}</p> */}



                <Row className="justify-content-md-center">
                    <Col xs>    
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                        <Button>Lähetä pdf</Button>
                    </Col>
                </Row>    

            </Container>

        </div>
    )
}

export default sendPdf