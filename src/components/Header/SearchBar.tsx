import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const setFocus = () => {
        if (inputRef.current) inputRef.current.focus();
    };
    return (
        <Component onClick={setFocus}>
            <AiOutlineSearch />
            <input ref={inputRef} type='text' placeholder='Stortinget, 0026, Oslo' />
        </Component>
    );
};

const Component = styled.div`
    background-color: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.tertiary};
    border-radius: 25px;
    display: flex;
    cursor: text;

    input {
        font-size: 15px;
        outline: none;
        border: none;
    }
    svg {
        align-self: center;
        margin-right: 0.5rem;
    }
`;

export default SearchBar;
