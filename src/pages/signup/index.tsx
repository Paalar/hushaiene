import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';

const Signup = () => {
    const [ session, loading ] = useSession();
    console.log(session);
    return (
        <>
            {!session && <>
                Not signed in <br/>
                <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
                Signed in as {session.user.email} <br/>
                <button onClick={signOut}>Sign out</button>
            </>}
        </>
    );
};

export default Signup;
