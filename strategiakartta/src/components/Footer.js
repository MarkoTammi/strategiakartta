

// Component to display the footer

import React from "react"
import text from "../txtFiles/footerTxt"
import Container from "react-bootstrap/Container"

const Footer = (props) => {
    const footerStyle = {
        color: '#47aeb6',
        fontStyle: 'italic',
        fontSize: '0.8em',
        marginTop: '30px',
        marginBottom: '30px'
      }
  
    return (
        <Container>
            <h6 style={footerStyle}>{text[props.version][1001]}</h6>
        </Container>
    )
}

export default Footer
