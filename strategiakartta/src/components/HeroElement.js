
// Component to display the hero / jumbotron element

import React, { } from 'react';

import Jumbotron from "react-bootstrap/Jumbotron"

// color control
import color from "../services/color"


const HeroElement = (props) =>{

/*   const jumboStyle = {
    backgroundColor: '#47aeb6',
    marginTop: '-5px'
  } */
 

  return (
     <>
      <Jumbotron style={{ backgroundColor: `${color[props.pageName]}`, marginTop: '-5px' }}>
          <h3>{props.headerTxt}</h3>
          <p>{props.subHeaderTxt}</p>
      </Jumbotron>
    </>

/*     <Jumbotron style={jumboStyle}>
        <h2>{props.header}</h2>
        <p>{props.subHeader}</p>
    </Jumbotron>
</> */

  )
}
export default HeroElement