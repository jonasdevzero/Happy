import React from 'react';

import { 
    Container,
    Header,
    Logo, 
    Title, 
    SubTitle,
    Footer,
    State,
    City
} from './styles';
import logo from '../../images/map-marker.svg';

function Sidebar() {
    return (
        <Container>
            <Header>
                <Logo src={logo} alt="Happy" />

                <Title>Escolha um orfanato no mapa</Title>
                <SubTitle>Muitas crianças estão espreando a sua visita :)</SubTitle>
            </Header>
            <Footer>
                <City>Nova Cruz</City>
                <State>Rio Grande do Norte</State>
            </Footer>
        </Container>
    );
};

export default Sidebar;
