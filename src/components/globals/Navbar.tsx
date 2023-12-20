"use client"

import Link from 'next/link';
import React from 'react'
import LoginButton from './../ui-ux/LoginButton';

const Navbar = () => {
    try {
        return (
            <div className='text-black bg-gradient-to-b from-slate-50 to-cyan-200 p-2 flex gap-5'>
                <Link href={"/"}>Home</Link>
                <LoginButton />
            </div>
        );
    } catch (error) {
        console.error('Lottie Animation Error:', error);
        return null;
    }
}

export default Navbar