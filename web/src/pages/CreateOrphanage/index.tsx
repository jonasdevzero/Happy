import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';

import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import { MapIcon } from '../../utils/MapIcon';
import created from '../../images/icons/created.svg';

import {
  ConfirmButton,
  ConfirmContainer,
  ConfirmImage,
  ConfirmInfo,
  ConfirmSubtitle,
  ConfirmTitle,
  Container,
  Inner,
} from './styles';
import { Sidebar, Form } from '../../components';

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const history = useHistory();
  const { goBack } = useHistory();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');
  const [instructions, setInstructions] = useState('');
  const [openning_hours, setOpenningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);

  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    });
  }, [])

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

  function handleRemoveImage(i: number) {
    const currentFileImages = images.filter((image, index) => i === index ? null : image)
    const currentImages = imagesPreview.filter((image, index) => i === index ? null : image);

    setImages(currentFileImages)
    setImagesPreview(currentImages);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();
    data.append('name', name);
    data.append('about', about);
    data.append('contact', contact);
    data.append('instructions', instructions);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('openning_hours', openning_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data)
      .then(resp => {
        setConfirm(true)
      });
  };

  function goToMap() {
    history.push('/app')
  }

  return (
    confirm ?
      (
        <ConfirmContainer>

          <ConfirmInfo>
            <ConfirmTitle>Ebaaa!</ConfirmTitle>
            <ConfirmSubtitle>
              O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
            </ConfirmSubtitle>
            <ConfirmButton onClick={goToMap}>Voltar para o mapa</ConfirmButton>
          </ConfirmInfo>

          <ConfirmImage src={created} alt='confirmed' />
        </ConfirmContainer>
      )
      :
      (
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
            <Form.FormWrapper>
              <Form onSubmit={handleSubmit}>
                <Form.Fieldset>
                  <Form.Legend>Dados</Form.Legend>

                  <Map
                    center={position.latitude !== 0 ? [position.latitude, position.longitude] : [-6.4847599, -35.4281936]}
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

                  <Form.InputWrapper>
                    <Form.Label htmlFor="name">Nome</Form.Label>
                    <Form.Input id="name" value={name} onChange={e => setName(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="about">
                      Sobre
                <Form.Span>Máximo de 300 caracteres</Form.Span>
                    </Form.Label>
                    <Form.TextArea id="name" maxLength={300} value={about} onChange={e => setAbout(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="contact">Número de whatsapp</Form.Label>
                    <Form.Input id="contact" value={contact} onChange={e => setContact(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="images">Fotos</Form.Label>

                    <Form.ImagesWrapper>
                      {imagesPreview.map((image, i) => {
                        return (
                          <div key={image}>
                            <Form.ImageWrapper >
                              <Form.ImageButton type='button' onClick={() => handleRemoveImage(i)}>
                                <FiX size={24} color='#FF669D' />
                              </Form.ImageButton>
                              <img src={image} alt={image} />
                            </Form.ImageWrapper>
                          </div>
                        )
                      })}

                      <Form.ImageLabel htmlFor="image[]">
                        <FiPlus size={24} color="#15b6d6" />
                      </Form.ImageLabel>

                      <Form.ImageInput multiple onChange={handleSelectImages} type="file" id="image[]" />
                    </Form.ImagesWrapper>
                  </Form.InputWrapper>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Legend>Visitação</Form.Legend>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="instructions">Instruções</Form.Label>
                    <Form.TextArea id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="opening_hours">Horário de funcionamento</Form.Label>
                    <Form.Input id="opening_hours" value={openning_hours} onChange={e => setOpenningHours(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="open_on_weekends">Atende fim de semana</Form.Label>

                    <Form.SelectWrapper>
                      <Form.Select
                        type="button"
                        className={open_on_weekends ? 'active' : ''}
                        onClick={_ => setOpenOnWeekends(true)}
                      >
                        Sim
                </Form.Select>
                      <Form.Select
                        type="button"
                        className={open_on_weekends ? '' : 'active'}
                        onClick={_ => setOpenOnWeekends(false)}
                      >
                        Não
                </Form.Select>
                    </Form.SelectWrapper>
                  </Form.InputWrapper>

                </Form.Fieldset>

                <Form.Submit type="submit">
                  Confirmar
          </Form.Submit>

              </Form>
            </Form.FormWrapper>

          </Inner>
        </Container>
      )
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
