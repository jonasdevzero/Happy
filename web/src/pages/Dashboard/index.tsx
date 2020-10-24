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
    NotFoundContainer,
    NotFoundContent,
    NotFoundMessage,
    DeletedContainer,
    DeletedInfo,
    DeletedTitle,
    DeletedSubtitle,
    DeletedButton,
    DeletedImage,
} from './styles';
import { FiMapPin, FiPower, FiAlertCircle } from 'react-icons/fi';
import notFound from '../../images/not-found.svg';
import Deleted from '../../images/deleted.svg';

import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
};

function Dashboard() {
    const [orphanagesContainer, setOrphanagesContainer] = useState(0); // 0 -> registered orphanages, 1 -> pending entries
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    const [orphanagesNotApproved, setOrphanagesNotApproved] = useState<Orphanage[]>([]);

    const { setUser } = useContext(UserContext);
    const history = useHistory()

    const [deletedContainer, setDeletedContainer] = useState(false);

    useEffect(() => {
        api.get('/orphanages?filter=approved')
            .then(response => { setOrphanages(response.data.orphanages) });
    }, []);

    useEffect(() => {
        api.get('/orphanages?filter=not_approved')
            .then(response => { setOrphanagesNotApproved(response.data.orphanages); })
    }, [])

    function EditOrphanage(id: number) {
        history.push(`/orphanages/edit/${id}`);
    };

    async function deleteOrphanage(id: number) {
        await api.delete(`/orphanages/${id}`);
        setDeletedContainer(true);
    };

    function ApproveOrphanage(id: number) {
        history.push(`/orphanages/approve/${id}`)
    };

    function switchContainer() {
        if (orphanagesContainer === 0) {
            setOrphanagesContainer(1);
            return;
        };

        setOrphanagesContainer(0);
    };

    function logout() {
        setUser!(undefined);
        history.push('/');
    };

    return (
        deletedContainer ?
            (
                <DeletedContainer>
                    <DeletedInfo>
                        <DeletedTitle>Excluído</DeletedTitle>
                        <DeletedSubtitle>Orfanato deletado</DeletedSubtitle>
                        <DeletedButton onClick={_ => setDeletedContainer(false)}>Voltar</DeletedButton>
                    </DeletedInfo>
                    <DeletedImage src={Deleted} />
                </DeletedContainer>
            )
            :
            (
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
                                            Orfanatos cadastrados
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
                                                Edit={() => EditOrphanage(orphanage.id)}
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
                                        <OrphanagesTotal>
                                            {orphanagesNotApproved.length ? orphanagesNotApproved.length + 'orfanatos' : ''}
                                        </OrphanagesTotal>
                                    </TitleContainer>
                                    {orphanagesNotApproved.length ?
                                        <OrphanagesContent>
                                            {orphanagesNotApproved.map(orphanage => (
                                                <MiniMap
                                                    key={orphanage.id}
                                                    name={orphanage.name}
                                                    latitude={orphanage.latitude}
                                                    longitude={orphanage.longitude}
                                                    RegistrationApproval={() => ApproveOrphanage(orphanage.id)}
                                                />
                                            ))}
                                        </OrphanagesContent>
                                        :
                                        <NotFoundContainer>
                                            <NotFoundContent>
                                                <img src={notFound} alt="Nenhum orfanato encontrado" />
                                                <NotFoundMessage>Nenhum no momento</NotFoundMessage>
                                            </NotFoundContent>
                                        </NotFoundContainer>
                                    }

                                </OrphanagesContainer>
                            )
                        }
                    </Content>
                </Container>
            )
    );
};

export default Dashboard;
