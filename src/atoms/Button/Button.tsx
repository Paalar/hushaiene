import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    children?: any
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button type='button' onClick={onClick}>
            {children}
        </button>
    );
};

const Component = styled(Button)`

`;

export default Button;
