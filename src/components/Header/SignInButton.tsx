import React, { FC } from 'react';
import Link from 'next/link';
import Button from 'atoms/Button/Button';
import styled from 'styled-components';
import { currentUser } from '../../api/authentication';

const SignInButton: FC = () => {
    if (currentUser) return <Button trait='text'>Logg ut</Button>;
    return (
        <RegisterDiv>
            <Link passHref href='/auth/signup'>
                <a>
                    <Button>
                        Registrer
                    </Button>
                </a>
            </Link>
            <hr />
            <Link passHref href='/auth/signin'>
                <a>
                    <Button trait='inverse'>
                    Logg inn
                    </Button>
                </a>
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
