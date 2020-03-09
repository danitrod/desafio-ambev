import React from 'react';
import styles from './Product.module.css';
import { formatDate } from '../../util/formatDate';

const Product = props => {
    let availability,
        style,
        stock,
        incoming = null;
    if (props.available === true) {
        availability = 'Disponível';
        style = styles.available;
        stock = <p>{props.quantity} caixas em estoque</p>;
    } else {
        availability = 'Indisponível';
        style = styles.unavailable;
        stock = null;
    }
    if (props.incoming.length > 0) {
        incoming = (
            <>
                <h4>Entregas</h4>
                <div className={styles.entregas}>
                    {props.incoming.map(p => {
                        return (
                            <div key={p.dueDate}>
                                {formatDate(p.dueDate)} - {p.distance}km
                                distante - {p.brew.quantity} unidades
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
    return (
        <li className={styles.product + ' ' + style}>
            <img
                src={require(`../../assets/img/brews/${props.product.logo}`)}
                alt='(logo)'
            />
            <h3>{props.product.name}</h3>
            <h5>{availability}</h5>
            {stock}
            <p>{props.product.price}/unidade</p>
            {incoming}
        </li>
    );
};

export default Product;
