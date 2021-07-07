import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/components/Sharehome.module.css'

const ShareHome = () => {
  return (

    <article className={styles.content}>
      <section className={styles.text}>
        <h3>
          Share your home,
          <br />
          nanny and costs
        </h3>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting
          your costs in half be, well, fantastic?! If only it was easy to
          connect with other parents to share your costs? Well now it is, with
          Hapu.{' '}<span>Hapu means tribe</span>{' '}and it’s our foundational 3 tribal principles that empowers you to
          create and manage your own tribe. A tribe that together has the
          power to create new affordable solutions in childcare that work for
          you and your community.
        </p>

        <a>Ready to get started?</a>

      </section>
      <section>
        <Image
          src="/assets/images/section-1.png"
          alt="Share your home, nanny and costs"
          width={584}
          height={392}
        />
      </section>
    </article>

  )
}

export default ShareHome
