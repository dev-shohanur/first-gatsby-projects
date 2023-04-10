import React from 'react'
import '../styles/global.css'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <NavBar />
            <div className='content'>
                {children}
            </div>
            <footer>
                <p>Copyright 2023 Gatsby</p>
            </footer>
        </div>
    )
}
