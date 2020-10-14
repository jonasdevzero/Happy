import React from "react";
import { useHistory } from 'react-router-dom';

import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from '../../images/map-marker.svg';

import { Sidebar } from '../../components';
import { 
  Container,
  Inner,
  Details,
  Image,
  Images,
  Button,
  ImageButton,
  DetailsContent,
  Name,
  Description,
  MapContainer,
  DetailsFooter,
  Link,
  Hr,
  InstructionTitle,
  OpenDetails,
  DetailHour,
  DetailOpenOnWeekends,
  Contact 
} from './styles';


const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <Container id="page-orphanage">
      <Sidebar.FixedContainer>
        <Sidebar.Logo />

        <Sidebar.Footer>
          <Sidebar.Button type={'button'} onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </Sidebar.Button>
        </Sidebar.Footer>
      </Sidebar.FixedContainer>

      <Inner>
        <Details className="orphanage-details">
          <Image src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <Images className="images">
            <Button className="active" type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
            <Button type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
            <Button type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
            <Button type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
            <Button type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
            <Button type="button">
              <ImageButton src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </Button>
          </Images>
          
          <DetailsContent className="orphanage-details-content">
            <Name>Lar das meninas</Name>
            <Description>
              Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
            </Description>

            <MapContainer className="map-container">
              <Map 
                center={[-27.2092052,-49.6401092]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <DetailsFooter>
                <Link to="/">Ver rotas no Google Maps</Link>
              </DetailsFooter>
            </MapContainer>

            <Hr />

            <InstructionTitle>Instruções para visita</InstructionTitle>
            <Description>Venha como se sentir mais à vontade e traga muito amor para dar.</Description>

            <OpenDetails className="open-details">
              <DetailHour className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </DetailHour>
              <DetailOpenOnWeekends className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </DetailOpenOnWeekends>
            </OpenDetails>

            <Contact type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </Contact>
          </DetailsContent>
        </Details>
      </Inner>
    </Container>
  );
}