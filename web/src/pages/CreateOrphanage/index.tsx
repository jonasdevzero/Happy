import React from "react";
import { useHistory } from "react-router-dom";

import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { MapIcon } from '../../utils/MapIcon';

import { 
  Container,
  Inner,
  Form,
  Fieldset,
  Legend,
  InputWrapper,
  Label,
  Span, 
  Input,
  TextArea,
  NewImage,
  Select,
  ButtonSelect,
  Submit, 
} from './styles';
import { Sidebar } from '../../components';


export default function CreateOrphanage() {
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
        <Form>
          <Fieldset>
            <Legend>Dados</Legend>

            <Map 
              center={[-6.4847599, -35.4281936]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker interactive={false} icon={MapIcon} position={[-6.4847599, -35.4281936]} />
            </Map>

            <InputWrapper>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="about">
                Sobre 
                <Span>Máximo de 300 caracteres</Span>
              </Label>
              <TextArea id="name" maxLength={300} />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="images">Fotos</Label>

              <div className="uploaded-image">

              </div>

              <NewImage>
                <FiPlus size={24} color="#15b6d6" />
              </NewImage>
            </InputWrapper>
          </Fieldset>

          <Fieldset>
            <Legend>Visitação</Legend>

            <InputWrapper>
              <Label htmlFor="instructions">Instruções</Label>
              <TextArea id="instructions" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="opening_hours">Nome</Label>
              <Input id="opening_hours" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

              <Select>
                <ButtonSelect type="button" className="active">Sim</ButtonSelect>
                <ButtonSelect type="button">Não</ButtonSelect>
              </Select>
            </InputWrapper>

          </Fieldset>

          <Submit type="submit">
            Confirmar
          </Submit>

        </Form>

      </Inner>
    </Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
