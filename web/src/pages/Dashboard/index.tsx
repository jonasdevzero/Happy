import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MiniMap, Sidebar } from '../../components';

import {
    Container,
    Content,
    OrphanagesContainer,
    OrphanagesContent,
    TitleContainer,
    Title,
    OrphanagesTotal,
} from './styles';
import { FiMapPin, FiPower, FiAlertCircle } from 'react-icons/fi';

import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';
import { AxiosRequestConfig } from 'axios';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
};

function Dashboard() {
    const { setUser } = useContext(UserContext);
    const [orphanagesContainer, setOrphanagesContainer] = useState(0); // 0 -> registered orphanages, 1 -> pending entries
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    const history = useHistory()


    useEffect(() => {
        api.get('orphanages')
            .then(response => {
                setOrphanages(response.data);
            });
    }, [orphanages]);

    function editOrphanage(id: number) {
        history.push(`/orphanage/edit/${id}`)
    };

    async function deleteOrphanage(id: number) {
        await api.delete('/orphanage', { id } as AxiosRequestConfig);
    };



    function switchContainer() {
        if (orphanagesContainer === 0) {
            setOrphanagesContainer(1);
            return;
        };

        setOrphanagesContainer(0);
    };

    function logout() {
        localStorage.removeItem('token');
        setUser!(undefined);
        history.push('/');
    };

    return (
        <Container>
            <Sidebar.FixedContainer>
                <Sidebar.Logo />
                <Sidebar.GroupIcon>
                    <Sidebar.Icon isActive={orphanagesContainer === 0 ? true : false} type="button" onClick={switchContainer}>
                        <FiMapPin size={24} />
                    </Sidebar.Icon>
                    <Sidebar.Icon isActive={orphanagesContainer === 1 ? true : false} type="button" onClick={switchContainer}>
                        <FiAlertCircle size={24} />
                    </Sidebar.Icon>
                </Sidebar.GroupIcon>
                <Sidebar.Icon isActive={false} type="button" onClick={logout}>
                    <FiPower size={24} />
                </Sidebar.Icon>
            </Sidebar.FixedContainer>

            <Content>
                {orphanagesContainer === 0 ?
                    (
                        <OrphanagesContainer>
                            <TitleContainer>
                                <Title>
                                    Orfanatos Cadastrados
                                </Title>
                                <OrphanagesTotal>{orphanages.length} orfanatos</OrphanagesTotal>
                            </TitleContainer>
                            <OrphanagesContent>
                                {orphanages.map(orphanage => (
                                    <MiniMap
                                        key={orphanage.id}
                                        name={orphanage.name}
                                        latitude={orphanage.latitude}
                                        longitude={orphanage.longitude}
                                        Edit={() => editOrphanage(orphanage.id)}
                                        Delete={() => deleteOrphanage(orphanage.id)}
                                    />
                                ))}
                            </OrphanagesContent>
                        </OrphanagesContainer>
                    )
                    :
                    (
                        <OrphanagesContainer>
                            <TitleContainer>
                                <Title>Cadastros pendentes</Title>
                            </TitleContainer>
                            <OrphanagesContent>
                                {/* Use data */}
                            </OrphanagesContent>
                        </OrphanagesContainer>
                    )
                }
            </Content>

        </Container>
    );
};

export default Dashboard;
