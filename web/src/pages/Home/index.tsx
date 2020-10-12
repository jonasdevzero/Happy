import React from 'react';

import {
    Container,
    Inner,
    Logo,
    Content,
    Title,
    SubTitle,
    Location,
    City,
    State,
    Link
} from './styles';
import logo from '../../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
    return (
        <Container>
            <Inner>
                <Logo src={logo} alt="Happy" />

                <Content>
                    <Title>Leve Felicidade para o mundo</Title>
                    <SubTitle>Visite orfanatos e mude o dia de muitas crianças.</SubTitle>
                </Content>

                <Location>
                    <City>Nova Cruz</City>
                    <State>Rio Grande do Norte</State>
                </Location>

                <Link to="/app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
                </Link>
            </Inner>
        </Container>
    );
};

export default Home;
