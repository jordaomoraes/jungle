import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Titles from "../../titles.json"
import styles from '../styles/components/Hero.module.css'

const Hero = () => {

  const [title, setTitle] = useState(null); 
  const [desc, setDesc] = useState(null); 
  
  let randomVariantIndex=0;
  

  useEffect(() => {
    console.log("chegou aqui")
    randonText();  
  }, [])

    function randonText() {
    randomVariantIndex = Math.floor(Math.random() * 2);  
    setTitle(Titles[randomVariantIndex].data.title)
    setDesc(Titles[randomVariantIndex].data.description)
    console.log(randomVariantIndex)
    console.log(Titles[randomVariantIndex].data.title)
  }

 
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.contentColumn}>
          <h1>{Titles[randomVariantIndex].data.title}</h1>
          <h2>{Titles[randomVariantIndex].data.description}</h2>
          <button onClick={randonText}>Teste</button>
          <Link href="#">
            <a className={styles.actionCall}>
              <Image
                src="/assets/icons/play-button.svg"
                alt="Play button"
                width={48}
                height={48}
              />
              <span>See hapu in action (27 seconds)</span>
            </a>
          </Link>
        </div>
        <div className={styles.contentColumn}>
          <Image
            src="/assets/images/header-image.png"
            alt="Nanny Share Example"
            width={316}
            height={290}
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
