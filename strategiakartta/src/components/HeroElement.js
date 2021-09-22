
// Component to display the hero / jumbotron element

import React, { } from 'react';

import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

import generalTxt from "../txtFiles/generalTxt"

// color control
import color from "../services/color"


const HeroElement = (props) => {

  return (
    <>
      <Jumbotron style={{ backgroundColor: `${color[props.pageName]}`, marginTop: '-5px' }}>
        <Row>
          <Col xs={10}>
            <h3>{props.headerTxt}</h3>
          </Col>
          <Col data-toggle="tooltip" title={generalTxt[props.version][1010]} >
            <FontAwesomeIcon icon={faInfoCircle} size='3x' color='#ffffff' onClick={props.handlerModalHelp} />
          </Col>
        </Row>
        <Row><Col><p style={{ fontSize: 18 }}>{props.subHeaderTxt}</p></Col></Row>
      </Jumbotron>
    </>
  )
}
export default HeroElement