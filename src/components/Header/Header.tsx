import { signIn, signOut, useSession } from 'next-auth/client';
import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const SignInButton: FC = () => {
    const [ session, loading ] = useSession();
    if (session) return <Button onClick={signOut}>Logg ut</Button>;
    return <Button onClick={signIn}>Logg inn</Button>;
};

const Header: FC = () => {
    return (
        <Component>
            <h1>Hushaiene</h1>
            <SignInButton />
        </Component>
    );
};

const Component = styled.div`
    background-color: red;
    grid-column: 1 / 4;
`;

export default Header;
