import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet'; 

import api from '../../services/api';

import { Sidebar, Form } from '../../components';
import {
    Container,
    Content
} from './styles';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { MapIcon } from '../../utils/MapIcon';

function ApproveOrphanage() {
    const params = useParams<{ id: string }>();
    const { goBack } = useHistory();

    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [about, setAbout] = useState('');
    const [contact, setContact] = useState('');
    const [instructions, setInstructions] = useState('');
    const [openning_hours, setOpenningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState('');

    // const [images, setImages] = useState<File[]>([]);
    const [imagesPreview, setImagesPreview] = useState<string[]>([])

    useEffect(() => {
        api.get(`/orphanages/${params.id}`)
            .then(response => {
                const { name, about, instructions, contact, openning_hours, open_on_weekends, images, latitude, longitude } = response.data;

                setName(name);
                setAbout(about);
                setInstructions(instructions);
                setContact(contact);
                setLatitude(latitude);
                setLongitude(longitude);
                setOpenningHours(openning_hours);
                setOpenOnWeekends(open_on_weekends);

                const imagesUrl = images.map((image: { url: string }) => image.url)
                setImagesPreview(imagesUrl);
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

            <Content>
                <Form onSubmit={() => { }}>
                    <Form.Fieldset>
                        <Form.Legend>Dados</Form.Legend>

                        <Map
                            center={[latitude, longitude]}
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            onclick={() => { }}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {latitude === 0 ?
                                null
                                :
                                <Marker interactive={false} icon={MapIcon} position={[latitude, longitude]} />
                            }
                        </Map>

                        <Form.InputWrapper>
                            <Form.Label htmlFor="name">Nome</Form.Label>
                            <Form.Input id="name" value={name ? name : ''} onChange={e => setName(e.target.value)} />
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
                                {imagesPreview.map(image => {
                                    return (
                                        <img key={image} src={image} alt={name} />
                                    )
                                })}

                                <Form.ImageLabel htmlFor="image[]">
                                    <FiPlus size={24} color="#15b6d6" />
                                </Form.ImageLabel>

                                <Form.ImageInput multiple onChange={() => { }} type="file" id="image[]" />
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
                                    onClick={_ => setOpenOnWeekends('true')}
                                >
                                    Sim
                                </Form.Select>
                                <Form.Select
                                    type="button"
                                    className={open_on_weekends ? '' : 'active'}
                                    onClick={_ => setOpenOnWeekends('false')}
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
            </Content>
        </Container>
    );
};

export default ApproveOrphanage;
