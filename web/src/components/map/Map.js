import React, { useState } from 'react';
import styles from './Map.module.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../../constants/tokens';
import TruckIcon from '../../assets/icons/truck.png';

const Map = () => {
    const trucks = [
        {
            id: 12,
            from: 'Osasco',
            to: 'Seu Zé',
            remaining: '16 min',
            coords: [-23.5603095, -46.6576738]
        },
        {
            id: 8,
            from: 'Osasco',
            to: 'Padaria Estrela',
            remaining: '4 min',
            coords: [-23.5653095, -46.6576738]
        },
        {
            id: 4,
            from: 'Mooca',
            to: 'Zathar Bar',
            remaining: '7 min',
            coords: [-23.5623095, -46.6526738]
        }
    ];

    const [viewport, setViewport] = useState({
        latitude: -23.5642908,
        longitude: -46.6565062,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });
    const [sidePanelInfo, setSidePanelInfo] = useState({
        style: styles.hidden
    });
    const screenWidth = window.screen.width;

    const markerClickHandler = truck => {
        setSidePanelInfo({ ...truck, style: styles.visible });
    };

    let mapWidth = '50%';
    if (screenWidth < 600) {
        mapWidth = '320px';
    }

    let centerMapStyle = styles.hide;
    let leftOffset = 100;
    if (sidePanelInfo.style === styles.visible) {
        centerMapStyle = styles.show;
        leftOffset = 0;
    }

    return (
        <div className={styles.container}>
            <ReactMapGL
                {...viewport}
                height='360px'
                width={mapWidth}
                mapStyle='mapbox://styles/mapbox/light-v9'
                className={styles.map + ' ' + centerMapStyle}
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                {trucks.map(truck => (
                    <Marker
                        latitude={truck.coords[0]}
                        longitude={truck.coords[1]}
                        offsetLeft={leftOffset}
                    >
                        <img
                            src={TruckIcon}
                            onClick={() => markerClickHandler(truck)}
                            className={styles.marker}
                            alt='Caminhão'
                        />
                    </Marker>
                ))}
            </ReactMapGL>
            <div className={styles.side + ' ' + sidePanelInfo.style}>
                <h3>Entrega {sidePanelInfo.id}</h3>
                <p>De {sidePanelInfo.from}</p>
                <p>Para {sidePanelInfo.to}</p>
                <p>{sidePanelInfo.remaining} estimados</p>
            </div>
        </div>
    );
};

export default Map;
