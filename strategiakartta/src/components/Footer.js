

// Component to display the footer

import React from "react"
import text from "../txtFiles/footerTxt"
import Container from "react-bootstrap/Container"

const Footer = (props) => {
    const footerStyle = {
        color: '#47aeb6',
        fontStyle: 'italic',
        fontSize: '1em',
        marginTop: '30px',
        marginBottom: '90px'
      }
  
    return (
        <Container>
            <h5 style={footerStyle}>{text[props.version][1001]}</h5>
        </Container>
    )
}

export default Footer
