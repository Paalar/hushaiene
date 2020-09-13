import React, { FC } from 'react';
import Link from 'next/link';
import { signOut, signIn, Session } from 'next-auth/client';
import Button from 'atoms/Button/Button';
import styled from 'styled-components';

type SignInButtonProps = {
    session: Session
}

const SignInButton: FC<SignInButtonProps> = ({ session }) => {
    if (session) return <Button onClick={signOut} trait='text'>Logg ut</Button>;
    return (
        <RegisterDiv>
            <Link href='/auth/signup' passHref>
                <Button trait='inverse'>
                    <a>Registrer</a>
                </Button>
            </Link>
            <hr />
            <Link href='/auth/signin' passHref>
                <Button trait='inverse'>
                    <a>Logg inn</a>
                </Button>
            </Link>
        </RegisterDiv>
    );
};

const RegisterDiv = styled.div`
    display: flex;
    a {
        color: black;
        text-decoration: none;
    }
    hr {
        margin: 5px 1rem;
        width: 0px;
        border: 1px solid #000;
    }
`;

export default SignInButton;
