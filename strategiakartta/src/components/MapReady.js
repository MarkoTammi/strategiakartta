// MapReady phase component

import React from "react"

// components
import HeroElement from "./HeroElement"
import Selected from "./Selected"

// Bootstrap component
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
import mapPageTxt from "../txtFiles/mapPageTxt"
import buttonTxt from "../txtFiles/buttonTxt"



const mapReady = (props) => {
    //console.log("MapReady component")

    return (
        <div>

            <HeroElement
                headerTxt={mapPageTxt[props.version][props.pageName][1010]}
                subHeaderTxt={mapPageTxt[props.version][props.pageName][1011]}
                pageName={props.pageName} />

            <Container>

                <Selected
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}/>
                
                <p style={{ marginTop: '20px'}}>{mapPageTxt[props.version][props.pageName][1012]}</p>

                <Row className="justify-content-md-center">
                    <Col xs>
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                        <Button onClick={props.handlerForward}>{buttonTxt[props.version][1004]}</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default mapReady