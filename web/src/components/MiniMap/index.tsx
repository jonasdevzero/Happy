import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import {
    Container,
    MapContainer,
    Info,
    OrphanageName,
    ButtonWrapper,
    Button,
} from './styles';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { MapIcon } from '../../utils/MapIcon';


interface MiniMapProps {
    name: string;
    latitude: number;
    longitude: number;
    Edit(e: React.MouseEvent<HTMLElement>): void;
    Delete(e: React.MouseEvent<HTMLElement>): void;
};

function MiniMap({ name, latitude, longitude, Edit, Delete }: MiniMapProps) {
    return (
        <Container>
            <MapContainer>
                <Map
                    center={[latitude, longitude]}
                    zoom={15}
                    style={{ width: '100%', height: '100%', borderRadius: '2rem' }}
                    dragging={false}
                    touchZoom={false}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                >
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
                    <Marker
                        interactive={false}
                        icon={MapIcon}
                        position={[latitude, longitude]}
                    />
                </Map>
            </MapContainer>
            <Info>
                <OrphanageName>{name}</OrphanageName>

                <ButtonWrapper>
                    <Button type="button" onClick={Edit}>
                        <FiEdit3 size={24} color="#12AFCB" />
                    </Button>
                    <Button type="button" onClick={Delete}>
                        <FiTrash size={24} color="#12AFCB" />
                    </Button>
                </ButtonWrapper>

            </Info>
        </Container>
    );
}

export default MiniMap;
