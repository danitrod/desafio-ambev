import React, { useState } from 'react';
import Catalog from '../../constants/products.json';
import { formatPrice } from '../../util/formatPrice';
import styles from './Mix.module.css';

const Mix = ({ products, cdd }) => {
    let totalPrice = 0;
    const productsTable = products.map(product => {
        const [catalogProduct] = Catalog.products.filter(
            catalogProduct => catalogProduct.name === product.name
        );
        totalPrice += product.quantity * catalogProduct.price;
        return (
            <div key={product.name}>
                <input type='checkbox' checked />
                <input type='number' />
                <p>{product.name}</p>
                <p>{formatPrice(catalogProduct.price)}</p>
                <p>{formatPrice(product.quantity * catalogProduct.price)}</p>
            </div>
        );
    });
    return (
        <div className={styles.mix} key={cdd}>
            <h2>{cdd}</h2>
            <div className={styles.data}>
                <h5>Selecionado</h5>
                <h5>Qnt</h5>
                <h5>Produto</h5>
                <h5>Preço/unidade</h5>
                <h5>Preço total</h5>
                {productsTable}
            </div>
            <h3>Total {formatPrice(totalPrice)}</h3>
            <button>Fazer pedido</button>
        </div>
    );
};

export default Mix;
