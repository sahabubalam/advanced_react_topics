import React, { useState } from 'react';
import Modal from './Modal';

const Home = () => {

    const [isShowModal,setIsShowModal] = useState(false);

    const handleOpenModal = (isShowModal) =>{
        setIsShowModal(true)
    }

    const handleCloseModal = () =>{
        setIsShowModal(false)
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleOpenModal}>Open Modal</button>

            {isShowModal && <Modal closeModal={handleCloseModal}/>}

        </div>
    );
};

export default Home;