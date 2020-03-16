import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Form from '../pdvform/Pdvform.js';
import DistributionIcon from '../../assets/icons/distribution.svg';
import LoadingSpinner from '../../assets/loader.svg';
import Banner from '../../assets/img/banner-2.jpg';
import Map from '../map/Map';

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
            <Header title='Você está no restaurante Costela Dourada' />
            <img
                className='banner'
                src={Banner}
                alt='banner juntos por um mundo melhor'
            />
            <div className='container'>
                <div className='form-cdds'>
                    {cdds.length > 0 ? (
                        <>
                            <div className='form'>
                                <h1>Verificação do ponto de venda</h1>
                                <Form />
                            </div>
                            <div className='cdds'>
                                <h1>Centros de distribuição próximos</h1>
                                <ul style={{ marginBottom: '28px' }}>
                                    {cdds.map(cdd => {
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
                                                        A{' '}
                                                        {Math.round(
                                                            cdd.distance
                                                        )}
                                                        km de distância
                                                    </p>
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                                <Link
                                    to='/venda'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <button className='orng'>Nova venda</button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className='loading'>
                            <img src={LoadingSpinner} alt='loading' />
                            <p>
                                Você precisa habilitar o uso de GPS para usar o
                                app.
                            </p>
                        </div>
                    )}
                </div>
                <hr
                    style={{
                        backgroundColor: '#fff',
                        color: '#fff',
                        border: '1px solid #eee',
                        width: '75%',
                        margin: '32px 0'
                    }}
                />
                <div className='map-view'>
                    {
                        <>
                            <h3 className='deliveryh'>
                                Veículos para entrega próximos
                            </h3>
                            <p>
                                Clique em um veículo para obter informações
                                sobre a entrega
                            </p>
                            <Map />
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default App;
