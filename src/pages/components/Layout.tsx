import React, { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type LayoutProps = {
    children?: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
