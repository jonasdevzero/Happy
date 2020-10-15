import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import {
    MapStyle,
    Container,
    Link
} from './styles';
import { Sidebar } from '../../components';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarker from '../../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function OrphanagesMap() {
    return (
        <>
            <MapStyle />
            <Container id="map-container">
                <Sidebar>
                    <Sidebar.Header>
                        <Sidebar.Logo />

                        <Sidebar.Title>Escolha um orfanato no mapa</Sidebar.Title>
                        <Sidebar.SubTitle>Muitas crianças estão esperando a sua visita :)</Sidebar.SubTitle>
                    </Sidebar.Header>

                    <Sidebar.Footer>
                        <Sidebar.City>Nova Cruz</Sidebar.City>
                        <Sidebar.State>Rio Grande do Norte</Sidebar.State>
                    </Sidebar.Footer>
                </Sidebar>

                <Map
                    center={[-6.4847599, -35.4281936]}
                    zoom={15}
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />

                    <Marker
                        position={[-6.4847599, -35.4281936]}
                        icon={mapIcon}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} minHeight={42} maxHeight={100} className="map-popup">
                            Orfanato do povo
                        <Link to="/orphanages/1">
                                <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>
                </Map>

                <Link to="/orphanages/create">
                    <FiPlus size={32} color="#fff" />
                </Link>
            </Container>
        </>
    );
};

export default OrphanagesMap;
