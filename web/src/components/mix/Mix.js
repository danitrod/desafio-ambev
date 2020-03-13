import React, { useState } from 'react';
import Catalog from '../../constants/products.json';
import { formatPrice } from '../../util/formatPrice';
import styles from './Mix.module.css';

const Mix = ({ products, cdd }) => {
    const quantityInputHandler = (e, index) => {
        products[index].quantity = e.target.value;
    };

    let totalPrice = 0;
    const productsTable = products.map((product, index) => {
        const [catalogProduct] = Catalog.products.filter(
            catalogProduct => catalogProduct.name === product.name
        );
        totalPrice += product.quantity * catalogProduct.price;
        return (
            <>
                <input type='checkbox' checked />
                <input
                    id={product.name}
                    value={product.quantity}
                    onChange={e => quantityInputHandler(e, index)}
                    type='number'
                />
                <p>{product.name}</p>
                <p>{formatPrice(catalogProduct.price)}</p>
                <p>{formatPrice(product.quantity * catalogProduct.price)}</p>
            </>
        );
    });
    return (
        <div className={styles.mix} key={cdd}>
            <h2>{cdd}</h2>
            <div className={styles.data}>
                <h5>Selecionado</h5>
                <h5>Quantidade</h5>
                <h5>Produto</h5>
                <h5>Preço/unidade</h5>
                <h5>Subtotal</h5>
                {productsTable}
            </div>
            <h3>Total {formatPrice(totalPrice)}</h3>
            <button>Fazer pedido</button>
        </div>
    );
};

export default Mix;
