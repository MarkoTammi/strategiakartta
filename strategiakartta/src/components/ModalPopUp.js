

// Component to display Modal

import React from "react"
import { ModalBody } from "react-bootstrap"
//import { ModalBody } from "react-bootstrap"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const ModalPopUp = (props) => {

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100000);
    }
    
    let modalBody = props.modalBody.slice()
       
    return (
        <Modal
            show={props.showModal}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <ModalBody>
            {modalBody.map((line) => <p key={getRandomInt()}>{line}</p>)}
            </ModalBody>
{/*             <Modal.Body>
                {props.modalBody1}
            </Modal.Body>
            <Modal.Body>
                {props.modalBody2}
            </Modal.Body>
            <Modal.Body>
                {props.modalBody3}
            </Modal.Body> */}
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    {props.modalButton1}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPopUp