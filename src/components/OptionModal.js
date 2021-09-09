import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedTask}
    onRequestClose={props.handleDeleteModal}
    contentLabel="Selected Task"
    closeTimeMS={200}
    className="modal"    
  >
    <h3 className="modal__title">Selected Task</h3>
    {props.selectedTask && <p className="modal__body">{props.selectedTask}</p>}
    <button onClick={() => {props.handleDeleteModal(props.selectedTask)}}>Okay</button>
  </Modal>
);

export default OptionModal