import Image from 'next/image'
import { useState } from 'react'


import styles from '../styles/components/Header.module.css'

const Header = ({ children }) => {


 

  return (
    <header className={styles.header}>
      <div className={styles.badgeContainer}>
        <Image
          src="/assets/svg/badge.svg"
          alt="Hapu's Logo Badge"
          width={48}
          height={64}
        />
      </div>
      {children}
      <section className={styles.loginArea}>
        <a>Become a Nanny Share Host</a>

  
        <a>Sign In</a>

      </section>
    </header>
  )
}

export default Header
