import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

import { Map, Marker, TileLayer } from "react-leaflet";

// import { FaWhatsapp } from "react-icons/fa";
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
  Hr,
  InstructionTitle,
  OpenDetails,
  DetailHour,
  DetailOpenOnWeekends,
  // Contact
} from './styles';

interface Orphanage {
  name: string;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  openning_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
};

interface OrphanageParams {
  id: string,
};

export default function Orphanage() {
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [currentImage, setCurrentImage] = useState(0);
  const params = useParams<OrphanageParams>();
  const { goBack } = useHistory();

  useEffect(() => {
    api.get(`orphanages/${params.id}`)
      .then(resp => {
        setOrphanage(resp.data);
      });
  }, [params.id]);

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
          <Image src={orphanage?.images[currentImage].url} alt={orphanage?.name} />

          <Images>
            {orphanage?.images.map((image, i) => (
              <Button 
                onClick={_ => setCurrentImage(i)} 
                type="button" 
                key={image.id}
                className={currentImage === i ? 'active' : ''}
              >
                <ImageButton src={image.url} alt={orphanage.name} />
              </Button>
            ))}
          </Images>

          <DetailsContent>
            <Name>{orphanage?.name}</Name>
            <Description>
              {orphanage?.instructions}
            </Description>

            <MapContainer>
              <Map
                // center={[orphanage?.latitude, orphanage?.longitude]} -> ERROR -> Alternative bellow!
                center={[orphanage?.latitude ? orphanage.latitude : 0, orphanage?.longitude ? orphanage.longitude : 0]}
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
                <Marker
                  interactive={false}
                  icon={MapIcon}
                  position={[orphanage?.latitude ? orphanage.latitude : 1, orphanage?.longitude ? orphanage.longitude : 1]} 
                />
              </Map>

              <DetailsFooter>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`}>
                  Ver rotas no Google Maps
                </a>
              </DetailsFooter>
            </MapContainer>

            <Hr />

            <InstructionTitle>Instruções para visita</InstructionTitle>
            <Description>{orphanage?.instructions}</Description>

            <OpenDetails>
              <DetailHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage?.openning_hours}
              </DetailHour>
              {orphanage?.open_on_weekends ?
                <DetailOpenOnWeekends>
                  <FiInfo size={32} color="#FF669D" />
                  Atendemos <br />
                  fim de semana
                </DetailOpenOnWeekends>
                :
                <DetailOpenOnWeekends className="dont-open">
                  <FiInfo size={32} color="#FF6690" />
                  Não atendemos <br />
                  fim de semana
                </DetailOpenOnWeekends>
              }
            </OpenDetails>

            {/* <Contact type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </Contact> */}
          </DetailsContent>
        </Details>
      </Inner>
    </Container>
  );
}