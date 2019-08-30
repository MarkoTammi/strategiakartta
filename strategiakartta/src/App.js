// MarkoT Strategiakartta App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import text from './Txt';


function App() {

    // Set language
    const lang = "fi";


  return (
    <div>

    <HeroElement text={text} lang={lang}/>

    <Footer text={text} lang={lang}/> 

    </div>

     
  )
}

// Component to display the hero / jumbotron element
const HeroElement = (props) =>{
  console.log("HeroElement - props :". props)
  return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5 text-center">{props.text[props.lang][1001]}</h1>
          <p className="lead text-center">{props.text[props.lang][1002]}</p>
        </div>
      </div>
  )
}

// Component to display the footer
const Footer = (props) => {
  const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: '0.8em'
    }

  return (
      <h6 style={footerStyle}>{props.text[props.lang][1003]}</h6>
  )
}
export default App;
