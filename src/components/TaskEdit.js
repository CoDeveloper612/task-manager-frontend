import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const TaskEdit = (props) => {
  let subtitle;
  const {task} = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setEdit(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdate({title, description});
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Task Edit</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required />
            <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" required></textarea>
            <button type="submit">Update</button>
            <button onClick={() => closeModal()}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default TaskEdit;