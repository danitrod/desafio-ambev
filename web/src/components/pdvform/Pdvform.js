import React from 'react';
import styles from './Pdvform.module.css';

const Pdvform = () => {
    return (
        <form className={styles.form}>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h4>Área Interna</h4>
                    <label className={styles.container}>
                        Cartazes
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Banners
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Displays
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Mobiles
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Hacks
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Refrigeradores Ambev
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
                <div className={styles.column}>
                    <h4>Área Externa</h4>
                    <label className={styles.container}>
                        Faixas
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Flange
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Luminosos
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>
                        Bandôs
                        <input type='checkbox' />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
            <textarea
                placeholder='Adicionar observações'
                className={styles.obs}
            />
            <button className='orng' style={{ marginTop: '32px' }}>
                Enviar
            </button>
        </form>
    );
};

export default Pdvform;
