import { colorTheme } from 'pages/_app';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export type ButtonTrait = 'filled' | 'inverse' | 'text'

type ButtonProps = {
    onClick?: () => void
    trait?: ButtonTrait
}

const Button: FC<ButtonProps> = ({ children, onClick, trait = 'filled' }) => {
    return (
        <StyledButton
            type='button'
            onClick={onClick}
            trait={trait}
        >
            {children}
        </StyledButton>
    );
};

Button.displayName = 'Button';

const StyledButton = styled.button<ButtonProps>`
    padding: 0.5em 2em;
    border-radius: 3px;
    min-width: 100px;
    height: min-content;
    cursor: pointer;
    font-size: 13px;

    ${({ trait = 'filled' }) => css`
        background-color: ${backgoundColorMixin(trait)};
        border: ${borderMixin(trait)};
        &:hover {
            background-color: ${hoverBackgroundColorMixin(trait)};
            border: ${hoverBorderMixin(trait)};
            color: ${colorMixin(trait)};
        }
    `}
`;

export default Button;

const SEE_THROUGH = 'rgba(0,0,0,0)';

const backgoundColorMixin = (trait: ButtonTrait) => {
    if (trait === 'filled') return colorTheme.tertiary;
    if (trait === 'inverse') return SEE_THROUGH;
    if (trait === 'text') return SEE_THROUGH;
};

const hoverBackgroundColorMixin = (trait: ButtonTrait) => {
    if (trait === 'filled') return SEE_THROUGH;
    if (trait === 'inverse') return colorTheme.tertiary;
    if (trait === 'text') return SEE_THROUGH;
};

const borderMixin = (trait: ButtonTrait) => {
    if (trait === 'filled') return `1px solid ${SEE_THROUGH}`;
    if (trait === 'inverse') return `1px solid ${colorTheme.tertiary}`;
    if (trait === 'text') return 'none';
};

const hoverBorderMixin = (trait: ButtonTrait) => {
    if (trait === 'filled') return `1px solid ${colorTheme.tertiary}`;
    if (trait === 'inverse') return `1px solid ${SEE_THROUGH}`;
    if (trait === 'text') return 'none';
};

const colorMixin = (trait: ButtonTrait) => {
    if (trait === 'text') return colorTheme.tertiary;
    return '#000';
};
