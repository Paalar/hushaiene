import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
    children?: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    );
};

const Content = styled.div`
    background-color: ${props => props.theme.primaryDark};
`;

export default Layout;
