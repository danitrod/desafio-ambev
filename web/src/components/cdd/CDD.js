import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import styles from './cdd.module.css';
import { useParams, useLocation } from 'react-router-dom';

const CDD = () => {
    const props = useLocation();
    const params = useParams();
    const [incomingBrews, setIncomingBrews] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [brews, setBrews] = useState(props.cdd.brews);

    useEffect(() => {
        const fetchIncomingBrews = async () => {
            const response = await api.post('/brewery/find', {
                cddName: params.name
            });
            console.log(response.data);
            if (response.data.err === false) {
                setIncomingBrews(response.data.brews);
            }
        };
        fetchIncomingBrews();
    }, [params.name]);

    const searchHandler = e => {
        setSearchValue(e.target.value);
        brews = brews.filter();
    };

    return (
        <div className={'container ' + styles.catalog}>
            <input
                placeholder='Buscar produto'
                value={searchValue}
                onChange={searchHandler}
            />
            <h1>Centro de distribuição {params.name}</h1>
            <ul>
                {brews.map(product => {
                    let incoming = [];
                    console.log(incomingBrews, product.name);
                    if (incomingBrews) {
                        incoming = incomingBrews.filter(
                            incomingBrew => incomingBrew.type === product.name
                        );
                    }
                    console.log(incoming);
                    return (
                        <li key={product.name}>
                            (fotinho)
                            <br />
                            {product.name}
                            <br />
                            In stock: {product.quantity}
                            <br />
                            Incoming:
                            {incoming.map(brew => {
                                return (
                                    <>
                                        {brew.dueDate} {brew.distance}km
                                    </>
                                );
                            })}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CDD;
