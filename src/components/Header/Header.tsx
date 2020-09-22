import React, { FC } from 'react';
import styled from 'styled-components';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import SignInButton from './SignInButton';

const Header: FC = () => {
    return (
        <Component>
            <img src={'/images/hushai.svg'}/>
            <SearchBar />
            <ProfileButton/>
            <SignInButton/>
        </Component>
    );
};

const Component = styled.div`
    background-color:  ${props => props.theme.primaryDark};
    border-bottom: 3px solid ${props => props.theme.tertiary};
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr repeat(3, auto);
    grid-gap: 30px;
    align-items: center;
    padding: 0.4rem;

    img {
        height: 30px;
        width: 30px;
    }
`;

export default Header;
