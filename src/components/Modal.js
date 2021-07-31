import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {

            setSelectedImg(null);
        }
    }
    return (
        <div className="backdrop" onClick={handleClose}>
                <img src={selectedImg} alt="agrandi" />
        </div> );
}

export default Modal;