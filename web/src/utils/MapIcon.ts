import Leaflet from 'leaflet';

import mapMarker from '../images/map-marker.svg';

export const MapIcon = Leaflet.icon({
    iconUrl: mapMarker,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

export const MapIconMarker = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});
