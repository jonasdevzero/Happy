import React, { useState, FormEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import logo from '../../images/map-marker.svg';

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
    Error
} from './styles';

import { login } from '../../services/user';
import { UserContext } from '../../contexts/UserContext';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();
    const { goBack } = useHistory();

    const { setUser } = useContext(UserContext);

    async function handleAuthUser(e: FormEvent) {
        e.preventDefault();

        login({ email, password }, remember).then(response => {
            const { user, token, error } = response;

            if (error) {
                setEmail('');
                setPassword('');
                setErrorMessage(error);
                return;
            };

            const { id, name, email } = user

            // if (setUser) {
            //     setUser(userData);
            // };
            setUser!({ id, name, email, token });
            history.push('/dashboard');
        });
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

                    {errorMessage && <Error>{errorMessage}</Error>}

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
