import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../../services/api';

import { Sidebar, Form } from '../../../components';
import {
    Container,
    Content
} from './styles';
import { FiArrowLeft, FiPlus, FiX, FiXCircle, FiCheck } from 'react-icons/fi';
import { MapIcon } from '../../../utils/MapIcon';

function ApproveOrphanage() {
    const params = useParams<{ id: string }>();
    const history = useHistory();

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [contact, setContact] = useState('');
    const [instructions, setInstructions] = useState('');
    const [openning_hours, setOpenningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const [images, setImages] = useState<File[]>([]);
    const [imagesPreview, setImagesPreview] = useState<{ url: string; id?: number }[]>([]);
    const [images_id, setImagesId] = useState('');

    useEffect(() => {
        api.get(`/orphanages/${params.id}`)
            .then(response => {
                const {
                    name,
                    about,
                    instructions,
                    contact,
                    openning_hours,
                    open_on_weekends,
                    images,
                    latitude,
                    longitude,
                } = response.data.orphanage;

                setPosition({ latitude, longitude });

                setName(name);
                setAbout(about);
                setInstructions(instructions);
                setContact(contact);
                setOpenningHours(openning_hours);
                setOpenOnWeekends(open_on_weekends);

                setImagesPreview(images);
            });
    }, [params.id]);

    async function approveOrphanage() {
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
        data.append('images_id', images_id);
        data.append('approved', String(true));

        images.forEach(image => {
            data.append('images', image);
        });

        await api.put(`/orphanages/${params.id}`, data)
            .then(response => {
                history.goBack();
            });
    };

    async function refuseOrphanage() {
        await api.delete(`/orphanages/${params.id}`);
        
        await history.goBack();
    };

    function handleMapClick(e: any) {
        const { lat, lng } = e.latlng;
        setPosition({ latitude: lat, longitude: lng });
    };

    function handleSelectImages(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;

        const selectedImages = Array.from(e.target.files);
        setImages([...images, ...selectedImages]);

        const selectImagesPreview = selectedImages.map(image => {
            return {
                url: URL.createObjectURL(image)
            }
        });

        setImagesPreview([...imagesPreview, ...selectImagesPreview]);
    };

    function handleRemoveImage(i: number, imageIndex?: number) {
        if (imageIndex) {
            const newString = images_id + ' ' + imageIndex
            setImagesId(newString);
        };

        const currentImages = imagesPreview.filter((image, index) => i === index ? null : image);
        setImagesPreview(currentImages);
    };

    return (
        <Container>
            <Sidebar.FixedContainer>
                <Sidebar.Logo />

                <Sidebar.Footer>
                    <Sidebar.Button type={'button'} onClick={history.goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                    </Sidebar.Button>
                </Sidebar.Footer>
            </Sidebar.FixedContainer>

            <Content>
                <Form.FormWrapper>
                    <Form>
                        <Form.Fieldset>
                            <Form.Legend>Dados</Form.Legend>

                            <Map
                                center={[position.latitude, position.longitude]}
                                style={{ width: '100%', height: 280 }}
                                zoom={15}
                                onclick={handleMapClick}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                {
                                    position.latitude !== 0 ?
                                        <Marker
                                            interactive={false}
                                            icon={MapIcon}
                                            position={[position.latitude, position.longitude]}
                                        />
                                        : null
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
                                    {imagesPreview?.map((image: { id?: number, url: string }, i) => {
                                        return (
                                            <div key={image.url}>
                                                <Form.ImageWrapper >
                                                    <Form.ImageButton type='button' onClick={() => handleRemoveImage(i, image?.id)}>
                                                        <FiX size={24} color='#FF669D' />
                                                    </Form.ImageButton>
                                                    <img src={image.url} alt={image.url} />
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
                    </Form>
                    <Form.ButtonWrapper>
                        <Form.Button onClick={refuseOrphanage}>
                            <FiXCircle size={24} color="#fff" />
                                Recusar
                        </Form.Button>
                        <Form.Button onClick={approveOrphanage}>
                            <FiCheck size={24} color="#fff" />
                                Aceitar
                        </Form.Button>
                    </Form.ButtonWrapper>
                </Form.FormWrapper>
            </Content>

        </Container>
    );
};

export default ApproveOrphanage;
