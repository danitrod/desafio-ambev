import React from 'react';
import styles from './Mix.module.css';

const Mix = () => {
    return (
        <div className={styles.mix}>
            <h2>Mix</h2>
            <table>
                <tr>
                    <th>Qnt</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                <tr>
                    <input type='number' value={150} />
                    <td>Skol 1L</td>
                    <td>R$1000,00</td>
                </tr>
                <tr>
                    <input type='number' value={150} />
                    <td>Skol 1L</td>
                    <td>R$1000,00</td>
                </tr>
                <tr>
                    <input type='number' value={150} />
                    <td>Skol 1L</td>
                    <td>R$1000,00</td>
                </tr>
            </table>
            <h3>Total: R$3000,00</h3>
            <button>Fazer pedido</button>
        </div>
    );
};

export default Mix;
