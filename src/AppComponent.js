import React from "react";
import Head from 'next/head';

export default function AppComponent() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
                <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
                <link rel="stylesheet" href="/static/base.css" />
            </Head>
            <b>This is Next.js</b>
        </div>
    )
}