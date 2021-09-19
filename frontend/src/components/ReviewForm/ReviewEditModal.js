// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from '../ReviewForm/editReviewForm'
// import './LoginFormModal.css';

function EditReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="EditReviewForm" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <EditReviewForm/>
        </Modal>
      )}
    </div>
  );
}

export default EditReviewModal;
