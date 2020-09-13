import { useSession } from 'next-auth/client';
import React, { FC } from 'react';
import styled from 'styled-components';
import ProfileButton from './ProfileButton';
import SignInButton from './SignInButton';

const Header: FC = () => {
    const [ session, loading ] = useSession();
    return (
        <Component>
            <img src='./images/hushai.svg' />
            <ProfileButton user={session?.user} />
            <SignInButton session={session} />
        </Component>
    );
};

const Component = styled.div`
    background-color:  ${props => props.theme.primaryDark};
    border-bottom: 3px solid ${props => props.theme.tertiary};
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 5px;
    align-items: center;
    padding: 0.4rem;

    img {
        height: 50px;
        width: 50px;
    }
`;

export default Header;
