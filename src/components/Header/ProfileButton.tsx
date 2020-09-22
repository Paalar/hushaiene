import React, { FC } from 'react';
import { useSelector } from 'redux/hooks';
import styled from 'styled-components';

const ProfileButton: FC = () => {
    const user = useSelector(state => state.user);
    const { profile } = user;
    if (!profile) return null;
    return (
        <Component>
            <img src={profile.image || ''} />
            <p>{profile.name}</p>
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
