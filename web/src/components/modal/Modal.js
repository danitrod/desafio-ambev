import React from 'react';
import QRCode from '../../assets/img/qrcode.png';
import styles from './Modal.module.css';

const Modal = props => {
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={styles.qrcontainer}>
                <p>Acompanhe seu pedido</p>
                <img src={QRCode} alt='QR Code' />
            </div>
            <button onClick={props.cancel}>Ok</button>
        </div>
    );
};

export default Modal;
