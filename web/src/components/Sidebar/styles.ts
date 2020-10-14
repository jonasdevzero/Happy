import styled from 'styled-components';

export const Container = styled.div`
    display:  flex;
    flex-direction: column;
    justify-content: space-between;
    width: 44rem;
    padding: 8rem;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const FixedContainer = styled.div`
    position: fixed;
    height: 100%;
    padding: 3.2rem 2.4rem;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.header``;

export const Logo = styled.img``;

export const Title = styled.h2`
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;
`;

export const SubTitle = styled.p`
    line-height: 2.8rem;
    margin-top: 2.4rem;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
`;

export const City = styled.strong`
    font-weight: 800;
`;

export const State = styled.span``;

export const Button = styled.button`
    width: 4.8rem;
    height: 4.8rem;

    border: 0;

    background: #12AFCB;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #17D6EB;
    };
`;