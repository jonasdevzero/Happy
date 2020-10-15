import React, { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';

import { Map, Marker, TileLayer } from 'react-leaflet';
// import { LeafletMouseEvent } from 'leaflet';

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
  NewImagesContainer,
  NewImageLabel,
  NewImageInput,
  Select,
  ButtonSelect,
  Submit,
} from './styles';
import { Sidebar } from '../../components';

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const history = useHistory();
  const { goBack } = useHistory();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openning_hours, setOpenningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([])

  function handleMapClick(e: any) {
    const { lat, lng } = e.latlng;
    setPosition({ latitude: lat, longitude: lng });
  };

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);

    const selectImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    });

    setImagesPreview(selectImagesPreview);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('openning_hours', openning_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    
    images.forEach(image => {
      data.append('images',image);
    });

    await api.post('orphanages', data)
      .then(resp => {
        history.push('/app');
      });
  };

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
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Dados</Legend>

            <Map
              center={[-6.4847599, -35.4281936]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude === 0 ?
                null
                :
                <Marker interactive={false} icon={MapIcon} position={[position.latitude, position.longitude]} />
              }
            </Map>

            <InputWrapper>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value={name} onChange={e => setName(e.target.value)} />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="about">
                Sobre
                <Span>Máximo de 300 caracteres</Span>
              </Label>
              <TextArea id="name" maxLength={300} value={about} onChange={e => setAbout(e.target.value)} />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="images">Fotos</Label>

              <NewImagesContainer className="uploaded-image">
                {imagesPreview.map(image => {
                  return (
                    <img key={image} src={image} alt={name}/>
                  )
                })}

                <NewImageLabel htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImageLabel>

                <NewImageInput multiple onChange={handleSelectImages} type="file" id="image[]" />
              </NewImagesContainer>
            </InputWrapper>
          </Fieldset>

          <Fieldset>
            <Legend>Visitação</Legend>

            <InputWrapper>
              <Label htmlFor="instructions">Instruções</Label>
              <TextArea id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="opening_hours">Horário de funcionamento</Label>
              <Input id="opening_hours" value={openning_hours} onChange={e => setOpenningHours(e.target.value)} />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="open_on_weekends">Atende fim de semana</Label>

              <Select>
                <ButtonSelect type="button" className={open_on_weekends ? 'active' : ''} onClick={_ => setOpenOnWeekends(true)}>Sim</ButtonSelect>
                <ButtonSelect type="button" className={open_on_weekends ? '' : 'active'} onClick={_ => setOpenOnWeekends(false)}>Não</ButtonSelect>
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
