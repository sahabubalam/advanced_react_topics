import React, { useState } from 'react';

const Modal = (props) => {
    //console.log("test",isShowModal)
    //pass korar por ata props akare pura function ta pathai dai after click button its work
    // const handleCloseModal = () =>{
    //     setIsShowModal(false)
    // }

    return (
        <div style={{margin: 70,border:'2px solid black', padding:20}}>
            <h1>I am Modal</h1>

            <button onClick={()=>props.closeModal()}>Close me</button>

        </div>
    );
};

export default Modal;