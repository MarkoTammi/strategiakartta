

// Component to display Modal

import React from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const ModalPopUp = (props) => {
  
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
            <Modal.Body>
                {props.modalBody1}
            </Modal.Body>
            <Modal.Body>
                {props.modalBody2}
            </Modal.Body>
            <Modal.Body>
                {props.modalBody3}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    {props.modalButton1}
                </Button>
                {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPopUp