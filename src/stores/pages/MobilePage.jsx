import React, { useState } from 'react';
import { mobileData } from '../data/mobile';
import Navbar from '../components/Navbar';
import { Modal, Button } from 'react-bootstrap';

const MobilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleShow = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  return (
    <>
      <Navbar />
      <div className='pageSection'>
        {mobileData.map((item) => (
          <div key={item.id}>
            <div className='pageImg' onClick={() => handleShow(item)}>
              <img src={item.image} alt='logo' />
            </div>
            
            <div className='proModel'>
              {item.company}, {item.model}
            </div>
          
          </div>
        ))}
      </div>

      {currentItem && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{currentItem.model}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-sec">
              <div className='body-img'>
                <img src={currentItem.image} alt="logo" className="model-img shadow-lg p-1 mb-2 " />
                <div className="flex-container">
                  <div className='m-1 w-100'></div>
                  <div className='m-1 w-100'>
                    <button className='btn'>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <h1>{currentItem.price}</h1>
            <h6>{currentItem.description}</h6>
            <h10>{currentItem.brand}</h10>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default MobilePage;
