import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <section>
                <Outlet />
            </section>

            <footer>Created by @PabloRiveiro</footer>
        </>
    )
}

export default Layout;