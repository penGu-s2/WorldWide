import React, { Children } from 'react'
import styles from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <Outlet/>
        <footer className={styles.footer}>
            <p className={styles.copyright}>{new Date().getFullYear()} by CT inc.</p>
        </footer>
    </div>
  )
}
