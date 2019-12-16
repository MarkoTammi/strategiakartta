
// Component to display the hero / jumbotron element

import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import text from "./heroElement-txt"


/* const HeroElement = (props) =>{
    return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5 text-center">{text[props.lang][1001]}</h1>
            <p className="lead text-center">{text[props.lang][1002]}</p>
          </div>
        </div>
    )
} */

const HeroElement = (props) =>{
  return (
    <>
      <style type="text/css">
        {`
          .jumbotron-special {
            background-color: #47aeb6;
          }
        `}
      </style>
      
      <Jumbotron variant="special">
          <h2>{text[props.lang][1001]}</h2>
          <p>{text[props.lang][1002]}</p>
      </Jumbotron>
    </>
  )
}
export default HeroElement