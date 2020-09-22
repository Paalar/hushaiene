import { getRedirectFromGoogle, signUp } from 'api/authentication';
import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux/store';
import { loginUser } from 'redux/userStore';
import styled from 'styled-components';
import { User } from './types';

const SignUp: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const dispatchUser = (user: User) => dispatch(loginUser(user));
    useEffect(() => {
        const setUser = async () => {
            const user = await getRedirectFromGoogle();
            if (user) {
                const hushaieneUser: User = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                };
                const token = await user.getIdToken();
                Cookies.set('firebaseToken', token, { expires: 60 });
                dispatchUser(hushaieneUser);
            }
        };
        setUser();
    }, [dispatchUser]);
    return (
        <Wrapper>
            <Component>
                <h2>Logg inn på Hushaiene</h2>
                <hr/>
                <div>
                    <LoginButton onClick={signUp}>
                        <img src={'/images/google.svg'} />
                        <p>Logg inn gjennom Google</p>
                    </LoginButton>
                </div>
            </Component>
        </Wrapper>
    );
};

const LoginButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-color: ${props => props.theme.tertiary};
    width: 50%;
    border-radius: 25px;
    padding: 0.2em 1em;
    font-size: 12px;
    cursor: pointer;

    img {
        background-color: #fff;
        border-radius: 25px;
        padding: 2px;
        width: 20px;
        height: 20px;
        margin-right: 0.2rem;
    }

    &:hover {
        background-color: ${props => props.theme.tertiary};
    }
`;

const Component = styled.div`
    background-color: #fff;
    align-self: center;
    padding: 1.5rem;
    text-align: center;
    margin: auto;

    h2 {
        margin-bottom: 0.3rem;
    }

    div {
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    grid-column: 2;
    margin: auto;
    width: 100%;
    max-width: 450px;
`;

export default SignUp;
