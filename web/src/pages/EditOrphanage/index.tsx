import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

import { Sidebar, Form } from '../../components';
import {
    Container,
    Content
} from './styles';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { MapIcon } from '../../utils/MapIcon';

function EditOrphanage() {
    const params = useParams<{ id: string }>();
    const { goBack } = useHistory();

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [contact, setContact] = useState('');
    const [instructions, setInstructions] = useState('');
    const [openning_hours, setOpenningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);

    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const [images, setImages] = useState<File[]>([]);
    const [imagesPreview, setImagesPreview] = useState<string[]>([])

    useEffect(() => {
        api.get(`/orphanages/${params.id}`)
            .then(response => {
                const { name, about, instructions, contact, openning_hours, open_on_weekends, images, latitude, longitude } = response.data;

                setName(name);
                setAbout(about);
                setInstructions(instructions);
                setContact(contact);
                setPosition({ latitude, longitude })
                setOpenningHours(openning_hours);
                setOpenOnWeekends(open_on_weekends);

                const imagesUrl = images.map((image: { url: string }) => image.url);
                setImagesPreview(imagesUrl);
            });
    }, [params.id]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const { latitude, longitude } = position;

        // transform the data in FormData()

        api.put(`/orphanages/${params.id}`, {
            name,
            about,
            contact,
            instructions,
            openning_hours,
            open_on_weekends,
            latitude,
            longitude,
        }).then(response => {
            goBack()
        })
    };

    function handleMapClick(e: any) {
        const { lat, lng } = e.latlng;
        setPosition({ latitude: lat, longitude: lng });
    };

    function handleSelectImages(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        console.log(e.target.files);

        const selectedImages = Array.from(e.target.files);
        console.log(selectedImages);
        setImages(selectedImages);

        const selectImagesPreview = selectedImages.map(image => {
            return URL.createObjectURL(image)
        });

        console.log(selectImagesPreview);

        setImagesPreview([...imagesPreview, ...selectImagesPreview]);
    };

    function handleRemoveImage(imageIndex: number) {
        const currentSelectedImages =  images.filter((image, index) => imageIndex === index ? null : image);
        const currentImages =  imagesPreview.filter((image, index) => imageIndex === index ? null : image);
        
        setImages(currentSelectedImages)
        setImagesPreview(currentImages);
    }

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
                <Form onSubmit={handleSubmit}>
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

                            {position.latitude === 0 ?
                                null
                                :
                                <Marker interactive={false} icon={MapIcon} position={[position.latitude, position.longitude]} />
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
                                {imagesPreview.map((image, i) => {
                                    return (
                                        <div key={image}>
                                            <Form.ImageWrapper >
                                                <Form.ImageButton type='button' onClick={() => handleRemoveImage(i)}>X</Form.ImageButton>
                                                <img src={image} alt={name} />
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
            </Content>

        </Container>
    )
}

export default EditOrphanage;
