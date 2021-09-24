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



const MapReady = (props) => {
    //console.log("MapReady component - user", props.user)
    let userTemp = props.user


    return (
        <div>

            <HeroElement
                headerTxt={mapPageTxt[props.version][props.pageName][1010]}
                subHeaderTxt={mapPageTxt[props.version][props.pageName][1011]}
                pageName={props.pageName} 
                handlerModalHelp={props.handlerModalHelp}
                version={props.version}
                />

            <Container>

                <Selected
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}/>
                
                <p style={{ marginTop: '20px'}}>{mapPageTxt[props.version][props.pageName][1012]}</p>

                <p style={{}}>{mapPageTxt[props.version][props.pageName][1013]}</p>
                
                    <div className="form-group">
                        <Row>
                            <Col xs={2}>
                                {mapPageTxt[props.version][props.pageName][1014]}
                            </Col>
                            <Col>
                                <input
                                    onChange={(e) => props.handlerOrganizationName(e)}
                                    type="text" className="form-control"
                                    placeholder={mapPageTxt[props.version][props.pageName][1015]}
                                    value={userTemp.organization}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                {mapPageTxt[props.version][props.pageName][1016]}
                            </Col>
                            <Col>
                                <input
                                    onChange={(e) => props.handlerUserName(e)}
                                    type="text" className="form-control"
                                    placeholder={mapPageTxt[props.version][props.pageName][1015]}
                                    value={userTemp.username}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                {mapPageTxt[props.version][props.pageName][1017]}
                            </Col>
                            <Col>
                                <input
                                    onChange={(e) => props.handlerEmail(e)}
                                    type="text" className="form-control"
                                    placeholder={mapPageTxt[props.version][props.pageName][1019]}
                                    value={userTemp.useremail}
                                />
                            </Col>
                        </Row>
                    </div>
                
                <p style={{}}>{mapPageTxt[props.version][props.pageName][1018]}</p>

                <Row className="justify-content-md-center">
                    <Col xs>
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                        <Button onClick={props.handlerMapReadyForward}>{buttonTxt[props.version][1005]}</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default MapReady