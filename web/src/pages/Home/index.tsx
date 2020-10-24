import React from 'react';

import {
    Container,
    Inner,
    Header,
    HeaderContainer,
    Logo,
    Content,
    Title,
    SubTitle,
    Location,
    City,
    State,
    Link,
    AccessRestrict
} from './styles';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../../images/icons/logo.svg';

function Home() {
    return (
        <Container>
            <Inner>
                <Header>
                    <HeaderContainer>
                        <Logo src={logo} alt="Happy" />

                        <Location>
                            <City>Nova Cruz</City>
                            <State>Rio Grande do Norte</State>
                        </Location>
                    </HeaderContainer>

                    <AccessRestrict to="/login">Acesso restrito</AccessRestrict>
                </Header>


                <Content>
                    <Title>Leve Felicidade para o mundo</Title>
                    <SubTitle>Visite orfanatos e mude o dia de muitas crianças.</SubTitle>
                </Content>

                <Link to="/app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
                </Link>
            </Inner>
        </Container>
    );
};

export default Home;
