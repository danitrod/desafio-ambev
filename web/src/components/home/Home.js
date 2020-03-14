import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import DistributionIcon from '../../assets/icons/distribution.svg';
import LoadingSpinner from '../../assets/loader.svg';
import Banner from '../../assets/img/banner-2.jpg';
import MapImg from '../../assets/img/map.png';
import DeliveryStatus from '../../assets/img/delivery.png';

const App = () => {
    const [cdds, setCdds] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async pos => {
                const response = await api.post('/cdd/search', {
                    coordinates: [pos.coords.longitude, pos.coords.latitude]
                });
                if (response.data.err === true) {
                    console.error('Cannot fetch cdds: ', response.data.msg);
                } else {
                    setCdds(response.data.cdds);
                }
            },
            err => {
                console.error('Cannot fetch cdds:', err);
            },
            {}
        );
    }, []);

    return (
        <>
            <Header title='Centros de distribuição próximos' />
            <img
                className='banner'
                src={Banner}
                alt='banner juntos por um mundo melhor'
            />
            <div className='container'>
                <div className='form-cdds'>
                    <div className='form'>
                        <h1>aeee varze ooo</h1>
                    </div>
                    <div className='cdds'>
                        <ul style={{ marginBottom: '28px' }}>
                            {cdds.length > 0 ? (
                                cdds.map(cdd => {
                                    return (
                                        <Link
                                            key={cdd.cdd.name}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#000',
                                                cursor: 'pointer',
                                                margin: '12px'
                                            }}
                                            to={{
                                                pathname: `/cdd/${cdd.cdd.name}`,
                                                cdd: cdd.cdd
                                            }}
                                        >
                                            <li>
                                                <img
                                                    src={DistributionIcon}
                                                    alt='Distribuição'
                                                />
                                                <h4>{cdd.cdd.name}</h4>{' '}
                                                <p>
                                                    A {Math.round(cdd.distance)}
                                                    km de distância
                                                </p>
                                            </li>
                                        </Link>
                                    );
                                })
                            ) : (
                                <img src={LoadingSpinner} alt='loading' />
                            )}
                        </ul>
                        <Link to='/venda' style={{ textDecoration: 'none' }}>
                            <button className='orng'>Nova venda</button>
                        </Link>
                    </div>
                </div>
                <hr
                    style={{
                        backgroundColor: '#fff',
                        color: '#fff',
                        border: '1px solid #eee',
                        width: '75%',
                        margin: '16px 0'
                    }}
                />
                <h3 className='deliveryh'>Veículos para entrega próximos</h3>
                <div className='map-view'>
                    <img className='map' src={MapImg} alt='map' />
                    <img
                        className='status'
                        src={DeliveryStatus}
                        alt='delivery'
                    />
                </div>
            </div>
        </>
    );
};

export default App;
