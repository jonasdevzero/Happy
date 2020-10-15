import React from "react";
import { useHistory } from 'react-router-dom';

import { Map, Marker, TileLayer } from "react-leaflet";

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { MapIcon } from '../../utils/MapIcon';

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

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <Container>
      <Sidebar.FixedContainer>
        <Sidebar.Logo />

        <Sidebar.Footer>
          <Sidebar.Button type={'button'} onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </Sidebar.Button>
        </Sidebar.Footer>
      </Sidebar.FixedContainer>

      <Inner>
        <Details>
          <Image src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <Images>
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
          
          <DetailsContent>
            <Name>Lar das meninas</Name>
            <Description>
              Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
            </Description>

            <MapContainer>
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
                <Marker interactive={false} icon={MapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <DetailsFooter>
                <Link to="/">Ver rotas no Google Maps</Link>
              </DetailsFooter>
            </MapContainer>

            <Hr />

            <InstructionTitle>Instruções para visita</InstructionTitle>
            <Description>Venha como se sentir mais à vontade e traga muito amor para dar.</Description>

            <OpenDetails>
              <DetailHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </DetailHour>
              <DetailOpenOnWeekends>
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </DetailOpenOnWeekends>
            </OpenDetails>

            <Contact type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </Contact>
          </DetailsContent>
        </Details>
      </Inner>
    </Container>
  );
}