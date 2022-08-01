import React, { useState } from 'react';
import Modal from '../components/Modal.js';
import Backdrop from '../components/Backdrop.js';
import '../index.css';

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
        <div className='todos-main'>
            <div className='todos-card'>
                <h3>{props.text}</h3>
                <div className='todos-btn'>
                    <button onClick={deleteHandler} >Delete</button>
                </div>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
            {modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
        </div>
    );
}

export default Todo;