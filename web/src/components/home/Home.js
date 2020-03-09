import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Home.css';
import { Link } from 'react-router-dom';
import DistributionIcon from '../../assets/icons/distribution.svg';
import LoadingSpinner from '../../assets/loader.svg';

const App = () => {
    const [cdds, setCdds] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async pos => {
                const response = await api.post('/cdd/search', {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
                if (response.data.err === true) {
                    console.error('Cannot fetch cdds: ', response.data.msg);
                } else {
                    setCdds(response.data.nearCdds);
                }
            },
            err => {
                console.error('Cannot fetch cdds:', err);
            },
            {}
        );
    }, []);

    return (
        <div className='container'>
            <div className='cdds'>
                <h2>Centros de distribuição próximos</h2>
                <ul style={{ marginBottom: '28px' }}>
                    {cdds.length > 0 ? (
                        cdds.map(cdd => {
                            return (
                                <Link
                                    key={cdd.name}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#000',
                                        cursor: 'pointer',
                                        margin: '12px'
                                    }}
                                    to={{
                                        pathname: `/cdd/${cdd.name}`,
                                        cdd
                                    }}
                                >
                                    <li>
                                        <img
                                            src={DistributionIcon}
                                            alt='Distribuição'
                                        />
                                        <h4>{cdd.name}</h4>{' '}
                                        <p>A {cdd.distance}km de distância</p>
                                    </li>
                                </Link>
                            );
                        })
                    ) : (
                        <img src={LoadingSpinner} alt='loading' />
                    )}
                </ul>
            </div>
            <Link to='/venda'>
                <button>Nova venda</button>
            </Link>
        </div>
    );
};

export default App;
