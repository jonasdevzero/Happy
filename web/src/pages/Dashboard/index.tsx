import React from 'react';

import { Sidebar } from '../../components'
import { Container } from './styles';

function Dashboard() {
    return (
        <Container>
            <Sidebar.FixedContainer>
                <Sidebar.Logo />
            </Sidebar.FixedContainer>
            Dashboard
        </Container>
    );
};

export default Dashboard;
