import React, { ComponentProps } from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type CustomDocumentProps = ComponentProps<typeof Document>;

const getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) =>
                    sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};

// eslint-disable-next-line no-empty-pattern
const CustomDocument = ({}: CustomDocumentProps): JSX.Element => {
    return (
        <Html lang='nb-NO'>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta httpEquiv='Cache-control' content='no-cache, no-store, must-revalidate' />
                <meta httpEquiv='Pragma' content='no-cache' />
                <link rel='icon' type='image/png' href='/img/icons/icon-256.png' />
                <link rel='manifest' href='/manifest.webmanifest' />
                <script id='stripe-js' src='https://js.stripe.com/v3/' async />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

CustomDocument.getInitialProps = getInitialProps;
CustomDocument.renderDocument = Document.renderDocument;

export default CustomDocument;
