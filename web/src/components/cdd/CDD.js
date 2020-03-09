import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import styles from './CDD.module.css';
import { useParams, useLocation } from 'react-router-dom';
import Catalog from '../../constants/products.json';
import Product from '../product/Product';
import Header from '../header/Header';

const CDD = () => {
    const props = useLocation();
    const params = useParams();
    const [incomingBrews, setIncomingBrews] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [brews, setBrews] = useState(props.cdd.brews);
    const [catalog, setCatalog] = useState(Catalog.products);

    useEffect(() => {
        const fetchIncomingBrews = async () => {
            const response = await api.post('/brewery/find', {
                cddName: params.name
            });
            if (response.data.err === false) {
                setIncomingBrews(response.data.brews);
            }
        };
        fetchIncomingBrews();
    }, [params.name]);

    const searchHandler = e => {
        setSearchValue(e.target.value);
        setBrews(
            props.cdd.brews.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
        setCatalog(
            Catalog.products.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <Header title={`Centro de distribuição ${params.name}`} />
            <div className={'container ' + styles.catalog}>
                <input
                    placeholder='Buscar produto'
                    value={searchValue}
                    onChange={searchHandler}
                />
                <ul>
                    {brews.map(brew => {
                        const [product] = Catalog.products.filter(
                            product => product.name === brew.name
                        );
                        if (product) {
                            let incoming = [];
                            if (incomingBrews.length > 0) {
                                incoming = incomingBrews.filter(
                                    incomingBrew =>
                                        incomingBrew.brew.name === product.name
                                );
                            }
                            return (
                                <Product
                                    key={product.name}
                                    available
                                    product={product}
                                    quantity={brew.quantity}
                                    incoming={incoming}
                                />
                            );
                        }
                        return null;
                    })}
                    {catalog.map(product => {
                        let incoming = [];
                        if (incomingBrews.length > 0) {
                            incoming = incomingBrews.filter(
                                incomingBrew =>
                                    incomingBrew.brew.name === product.name
                            );
                        }
                        const available = brews.filter(
                            brew => product.name === brew.name
                        );
                        if (available.length === 0) {
                            return (
                                <Product
                                    key={product.name}
                                    product={product}
                                    incoming={incoming}
                                />
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
        </>
    );
};

export default CDD;
