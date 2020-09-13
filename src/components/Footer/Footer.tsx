import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => {
    return (
        <Component>
            <p>Footer</p>
        </Component>
    );
};

const Component = styled.div`
    background-color: ${props => props.theme.tertiary};
    grid-column: 1 / 4;
`;

export default Footer;
