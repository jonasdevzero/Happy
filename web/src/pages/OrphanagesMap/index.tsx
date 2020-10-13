import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { 
    Container,
    Link 
} from './styles';
import { Sidebar } from '../../components';
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {
    return (
        <Container>
            <Sidebar />

            <Map
                center={[-6.4847599, -35.4281936]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="/">
                <FiPlus size={32} color="#fff" />
            </Link>
        </Container>
    );
};

export default OrphanagesMap;
