import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedTask}
    onRequestClose={props.handleDeleteModal}
    contentLabel="Selected Task"
  >
    <h3>Selected Task</h3>
    {props.selectedTask && <p>{props.selectedTask}</p>}
    <button onClick={() => {
      props.handleDeleteModal(props.selectedTask)}}
      >
      Okay
    </button>
  </Modal>
);

export default OptionModal