import React from 'react';

import {
    Container,
    FixedContainer,
    Header,
    Icon,
    GroupIcon,
    Logo,
    Title,
    SubTitle,
    Footer,
    State,
    City,
    Button
} from './styles';
import logo from '../../images/map-marker.svg';

interface SidebarChildren {
    children: React.ReactNode;
    isActive?: boolean | false;
};

interface ButtonProps {
    children: React.ReactNode,
    type?: 'button' | 'submit',
    onClick(e: React.MouseEvent<HTMLElement>): void
}

function Sidebar({ children }: SidebarChildren) {
    return <Container>{children}</Container>
};

Sidebar.FixedContainer = function SidebarFixedContainer({ children }: SidebarChildren) {
    return <FixedContainer>{children}</FixedContainer>
}

Sidebar.Header = function SidebarHeader({ children }: SidebarChildren) {
    return <Header>{children}</Header>
};

Sidebar.Logo = function SidebarLogo() {
    return <Logo src={logo} alt="Happy" /> // Static
};

Sidebar.GroupIcon = function SidebarGroupIcon({ children }: SidebarChildren) {
    return <GroupIcon>{children}</GroupIcon>
}

Sidebar.Icon = function SidebarIcon({ children, isActive }: SidebarChildren) {
    return <Icon {...isActive}>{children}</Icon>
};

Sidebar.Title = function SidebarTitle({ children }: SidebarChildren) {
    return <Title>{children}</Title>
};

Sidebar.SubTitle = function SidebarSubTitle({ children }: SidebarChildren) {
    return <SubTitle>{children}</SubTitle>
};

Sidebar.City = function SidebarCity({ children }: SidebarChildren) {
    return <City>{children}</City>
};

Sidebar.State = function SidebarState({ children }: SidebarChildren) {
    return <State>{children}</State>
};

Sidebar.Button = function SideBarButton({ children, type, onClick }: ButtonProps) {
    return <Button type={type} onClick={onClick}>{children}</Button>
};

Sidebar.Footer = function SidebarFooter({ children }: SidebarChildren) {
    return <Footer>{children}</Footer>
};

export default Sidebar;
