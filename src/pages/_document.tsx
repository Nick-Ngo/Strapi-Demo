import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className='bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
