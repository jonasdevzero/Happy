import React, { useState, FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import logo from '../../images/map-marker.svg';

import { UserContext } from '../../contexts/userContext';
import api from '../../services/api';

import {
    Container,
    Banner,
    GoBack,
    Logo,
    Title,
    State,
    City,
    Content,
    Form,
    FormTitle,
    InputWrapper,
    Input,
    CheckWrapper,
    Check,
    Label,
    Help,
    Button,

} from './styles';

function Signin() {
    const { setUser }: any = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const { goBack } = useHistory();

    async function handleAuthUser(e: FormEvent) {
        e.preventDefault();

        const response = await api.post('/user/login', { email, password });
        const { token, user, error } = response.data;

        console.log(error)

        if (remember) {
            localStorage.setItem('token', JSON.stringify(token))
        }

        setUser(user);
    };

    return (
        <Container>
            <Banner>
                <Logo src={logo} alt="logo" />
                <Title>happy</Title>

                <State>Rio Grande do Norte</State>
                <City>Nova Cruz</City>
            </Banner>
            <Content>
                <GoBack onClick={goBack}>
                    <FiArrowLeft size={24} color="#15C3D6" />
                </GoBack>
                <Form onSubmit={e => handleAuthUser(e)}>
                    <FormTitle>Fazer login</FormTitle>

                    <InputWrapper>
                        <Label>E-mail</Label>
                        <Input 
                            type="text" 
                            required 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Label>Senha</Label>
                        <Input 
                            type="password" 
                            required 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </InputWrapper>

                    <CheckWrapper>
                        <Check type="button" onClick={_ => setRemember(!remember)} style={{ backgroundColor: remember ? '#37C77F' : '#F5F8FA' }}>
                            <FiCheck size={18} color={'#fff'} /> 
                        </Check>
                        <Label>Lembrar me</Label>
                        <Help type="button">Esqueci minha senha</Help>
                    </CheckWrapper>

                    <Button>Entrar</Button>
                </Form>
            </Content>
        </Container>
    );
};

export default Signin;
