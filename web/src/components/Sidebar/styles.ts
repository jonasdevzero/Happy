import styled, { StyledComponent } from 'styled-components';

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

interface IconProps {
    isActive: boolean;
}

export const Icon: StyledComponent<"button", any, { isActive: boolean }, never> = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1.6rem;
    background-color: ${({ isActive }: IconProps) => isActive ? '#FFD666' : '#12AFCB'};
    border: none;
    cursor: pointer;

    svg {
        color: ${({ isActive }: IconProps) => isActive ? '#12AFCB' : '#fff'};
    };

    &:hover {
        background-color: #FFD666;

        svg {
            color: #12AFCB;
        };
    };

    & + & {
        margin-top: 1.5rem;
    };
`;

export const GroupIcon = styled.div`
    display: flex;
    flex-direction: column;
`;

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