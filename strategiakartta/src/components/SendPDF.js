// Component to download PDF

import React, { } from "react"
import { PDFDownloadLink } from '@react-pdf/renderer';

// components
import Selected from "./Selected"
import PDFDocument from "./PDFDocument";

// Bootstrap component
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

// text files
//import generalTxt from "../txtFiles/generalTxt"
import buttonTxt from "../txtFiles/buttonTxt"
import pdfDocumentTxt from "../txtFiles/pdfDocumentTxt"



const SendPdf = (props) => {
    //(console.log("sendPDF component")
    const usr = props.user

    const today = () => {
        const d = new Date();
        const n = d.toLocaleDateString();
        return n
    }

    return (
        <div style={{ margin: "40px" }}>
            <Container>

                <Selected
                    version={props.version}
                    pageName={props.pageName}
                    answers={props.answers}
                />
                <Row style={{marginTop:15, marginBottom: 30}}>
                    {usr.organization}  /  {usr.username}  /  {today()}
                </Row>

                <Row>
                    {pdfDocumentTxt[props.version][1010]}
                </Row>

                <Row className="justify-content-md-center" style={{ margin: 20 }}>
                    <Col xs>
                        <Button className="btn btn-secondary m-2" onClick={props.handlerBackwards}>{buttonTxt[props.version][1001]}</Button>
                    </Col>
                    <Col xs>
                        <Button variant="btn btn-light m-2" style={{}}>
                            <PDFDownloadLink 
                                document={<PDFDocument version={props.version} pageName={props.pageName} answers={props.answers} user={props.user} />} 
                                fileName="strategiakartta.pdf">
                                {/* {({ blob, url, loading, error }) => (loading ? 'Lataa dokumenttia...' : 'Lataa strategiakartta PDF')} */}
                                {({ blob, loading, error }) => (loading ? 'Lataa dokumenttia...' : 'Lataa strategiakartta PDF')}
                            </PDFDownloadLink>
                        </Button>
                    </Col>
                    <Col xs={5}></Col>
                </Row>

            </Container>
        </div>
    )
}

export default SendPdf