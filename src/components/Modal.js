import { motion } from 'framer-motion';
import React from 'react'


const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {

            setSelectedImg(null);
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="agrandi"
                initial={{ y: "-100vh" }}
                animate={{y: 0}}
            />
        </motion.div> );
}

export default Modal;