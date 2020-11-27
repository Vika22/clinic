import React from 'react'
import { Modal } from 'react-bootstrap';
import { GoogleMap, Marker } from "react-google-maps"
const ModalMap = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.257920839822!2d30.512180853824024!3d50.44921240741097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa1b91f%3A0x42d5962fe7e791c!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LLQuNGB0LjQvNC-0YHRgtC4!5e0!3m2!1sru!2sua!4v1606376909863!5m2!1sru!2sua"
                style={{ border: 0 }} frameborder="0" width="1000" height="800"
                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </Modal>
    )
}

export default ModalMap
