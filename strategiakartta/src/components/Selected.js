// Component to show what has been selected

import React, { useLayoutEffect } from "react"

// components


// Bootstrap component
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/Container"

// text files
import mapPageTxt from "../txtFiles/mapPageTxt"

// color
import color from "../services/color"


const selected = (props) => {


    return (
        <div style={{ margin: '20px' }}>
            <Row>
            <Col>Resurssit</Col>
                <Col>Prosessit</Col>
                <Col>Asiakkaiden odotukset</Col>
                <Col>Liiketoiminnan tavoitteet</Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '15rem' }}>
                        <Card.Header style={{ width: '18rem', backgroundColor: color.MapResources }}>People</Card.Header>
                        <Card.Text>Jotain</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '15rem' }}>
                        <Card.Header style={{ width: '18rem', backgroundColor: color.MapProcess }}>Process</Card.Header>
                        <Card.Text>Jotain</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '15rem' }}>
                        <Card.Header style={{ width: '18rem', backgroundColor: color.MapCustomer }}>Customer</Card.Header>
                        <Card.Text>Jotain</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '15rem' }}>
                        <Card.Header style={{ width: '18rem', backgroundColor: color.MapTarget }}>{props.answers[0].q}</Card.Header>
                        <Card.Text>{props.answers[0].note}</Card.Text>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default selected