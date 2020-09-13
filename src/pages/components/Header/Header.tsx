import React, { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
    return (
        <Component>
            <h1>Hushaiene</h1>
        </Component>
    );
};

const Component = styled.div`
    background-color: red;
    grid-column: 1 / 4;
`;

export default Header;
