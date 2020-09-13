import React, { FC } from 'react';
import { providers, signIn } from 'next-auth/client';

const SignIn: FC = ({ providers }) => (
    <>
        {Object.values(providers).map(provider => (
            <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
            </div>
        ))}
    </>
);

SignIn.getInitialProps = async (context) => {
    return {
        providers: await providers(context),
    };
};

export default SignIn;
