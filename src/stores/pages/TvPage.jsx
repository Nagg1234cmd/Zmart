import React, { useState } from 'react';
import { tvData } from '../data/tv';
import Navbar from '../components/Navbar';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const TvPage = () => {
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
        {tvData.map((item) => {
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
        })}
      </div>

      {modalData && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.company}, {modalData.model}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='modelpage'>
  
  <div>
  <img  className="model-img"src={modalData.image} alt="logo" style={{ width: '100%' }} />
  
  </div>
   <div>
   <p>Details about {modalData.company} {modalData.model}...</p>
   </div>{modalData.price}
   <h2></h2>
  </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to={`/tv/${modalData.id}`}>
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

export default TvPage;
