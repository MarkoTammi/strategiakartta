

// Component to display the footer

import React from "react"
import text from "./footer-txt"

const Footer = (props) => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: '0.8em'
      }
  
    return (
        <h6 style={footerStyle}>{text[props.lang][1001]}</h6>
    )
}

export default Footer
