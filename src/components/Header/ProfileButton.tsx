import React, { FC } from 'react';
import { Session } from 'next-auth/client';
import styled from 'styled-components';

type ProfileButtonProps = {
    user?: Session['user']
}

const ProfileButton: FC<ProfileButtonProps> = ({ user }) => {
    if (!user) return null;
    return (
        <Component>
            <img src={user.image} />
            <p>{user.name}</p>
        </Component>
    );
};

const Component = styled.div`
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0.1em 1em;
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    &:hover {
        border: 1px solid ${props => props.theme.tertiary};
    }

    img {
        height: 35px;
        width: 35px;
        border-radius: 25px;
        margin-right: 1em;
    }
`;

export default ProfileButton;
