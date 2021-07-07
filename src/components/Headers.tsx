import Image from 'next/image'
import { useState } from 'react'
import variants from "../../variant.json"

import styles from '../styles/components/Header.module.css'

const Header = ({ children }) => {

  const [varients, setVarients] = useState(null)

  function startNewChallenge() {
    const randomVariantIndex = Math.floor(Math.random() * 2);
    const variant = variants[randomVariantIndex];
    setVarients(variant)
    console.log(randomVariantIndex)
    console.log(variants[randomVariantIndex])
  }

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
