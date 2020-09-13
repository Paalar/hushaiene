import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
};

const authorize = (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options);

export default authorize;
