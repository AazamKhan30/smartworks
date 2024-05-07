"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
 
      <Link href="#" className="siteBtn" onClick={handleShow}>
        Get Started
      </Link>
      <Modal show={show} onHide={handleClose} className="formModal"
      centered>
   
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title >Get In Touch</Modal.Title>
          </Modal.Header>
          <form className='mt-4'>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email ID"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="form-group">
             
              <textarea
                name="message"
                className="form-control"
                placeholder="Enter your Message"
              ></textarea>
            </div>

            <button type="submit" className="siteBtn mt-3">
              Book a tour
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal