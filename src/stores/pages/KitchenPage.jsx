import React, { useState } from 'react';
import { kitchenData } from "../data/kitchen";
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const KitchenPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleShow = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {
          kitchenData.map((item) => {
            return (
              <div key={item.id}>
                <div className='pageImg' onClick={() => handleShow(item)}>
                  <img src={item.image} alt="logo" />
                </div>
                <div className='proModel'>
                  {item.company}, {item.model}
                </div>
              </div>
            );
          })
        }
      </div>

      {modalData && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.company}, {modalData.model}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={modalData.image} alt="logo" style={{ width: '100%' }} />
            <p>Details about {modalData.company}, {modalData.model}...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to={`/kitchen/${modalData.id}`}>
              <Button variant="primary" onClick={handleClose}>
                More Details
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default KitchenPage;

