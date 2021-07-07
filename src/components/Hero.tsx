import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import VarTexts from "../../variant.json"

import TitleExperiment from './TitleExperiment'

import styles from '../styles/components/Hero.module.css'

const Hero = () => {
  // const [varients, setVarients] = useState(null);
  //  function randonText()
  // {
  //  const randomVariantIndex = Math.floor(Math.random() * 2);
  //  const variant = VarTexts[randomVariantIndex];
  //  setVarients(variant)
  //  console.log(randomVariantIndex)
  //  console.log(varients[randomVariantIndex])
  // }
return (
  <section className={styles.hero}>
    <div className={styles.content}>
      <div className={styles.contentColumn}>
    {/* <h1>{varients.data.title}</h1>
      <h2>{varients.data.description}</h2>   */}
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
