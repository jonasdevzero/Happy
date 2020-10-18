import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: .7;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Logo = styled.img`
    width: 11rem;
    object-fit: cover;
`;

export const Title = styled.h1`
    font-size: 10rem;
    font-weight: 800;
`;

export const State = styled.strong`
    font-weight: 800;
    margin-top: 8rem;
`;

export const City = styled.span``;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: .3;
    background-color: #fff;

    position: relative;
`;

export const GoBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 1.6rem;
    position: absolute;
    top: 5%;
    right: 10%;
    background-color: #F5F8FA;
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormTitle = styled.h1`
    color: #5C8599;
    font-size: 3.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    margin-bottom: 5rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: .5rem;
`;

export const Label = styled.label`
    color: #8FA7B2;
    margin: 1rem 0;
`;

export const Input = styled.input`
    width: 36rem;
    height: 6.4rem;
    border-radius: 2rem;
    border: 1px solid #D3E2E5;
    background-color: #F5F8FA;
    outline: none;
    padding: 0 2.5rem;
`;

export const CheckWrapper = styled(InputWrapper)`
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
`;

export const Check = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #D3E2E5;
    border-radius: .8rem;
    background-color: #F5F8FA;
    box-sizing: border-box;
    margin-right: 1.7rem;
    outline: none;
    cursor: pointer;

    .check {
        background-color: #37C77F;
    };
`;


export const Help = styled.button`
    color: #8FA7B2;
    margin-left: auto;
    cursor: pointer; 
    background: none;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    width: 36rem;
    height: 6.4rem;
    background-color: #37C77F;
    color: #fff;
    border: none;
    border-radius: 2rem;
    margin-top: 3rem;
    cursor: pointer;
`;
