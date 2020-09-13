import React, { FC } from 'react';
import styled from 'styled-components';

const Page: FC = () => {
    return (
        <Component>
            <h1>Hello</h1>
        </Component>
    );
};

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Page;
