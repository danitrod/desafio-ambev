import React from 'react';
import Catalog from '../../constants/products.json';
import { formatPrice } from '../../util/formatPrice';
import styles from './Mix.module.css';

const Mix = ({ products, cdd }) => {
    let totalPrice = 0;
    const productsTable = Object.keys(products).map(product => {
        if (products[product] === 0) {
            return null;
        }
        const [catalogProduct] = Catalog.products.filter(
            catalogProduct => catalogProduct.name === product
        );
        totalPrice += products[product] * catalogProduct.price;
        return (
            <>
                <input type='checkbox' checked />
                <p>{product}</p>
                <p>{formatPrice(catalogProduct.price)}</p>
                <data>{products[product]}</data>
                <p>{formatPrice(products[product] * catalogProduct.price)}</p>
            </>
        );
    });
    return (
        <div className={styles.mix}>
            <h2>CDD {cdd}</h2>
            <div className={styles.data}>
                <h5>Selecionado</h5>
                <h5>Produto</h5>
                <h5>Preço/unidade</h5>
                <h5>Quantidade</h5>
                <h5>Subtotal</h5>
                {productsTable}
            </div>
            <h3>Total {formatPrice(totalPrice)}</h3>
            <button>Fazer pedido</button>
        </div>
    );
};

export default Mix;
