import React from 'react';
import Head from 'next/head';

interface HelmetProps {
    title: string;
    description: string;
    meta?: { name: string; content: string }[];
}

const ApplicationHelmet: React.FC<HelmetProps> = ({ title, description }) => {
    const author = "Bryan Carder";

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="description" content={description} />
                <meta name="author" content={author} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content={author} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
        </div>
    );
};

export default ApplicationHelmet;