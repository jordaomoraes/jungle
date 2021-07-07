import Image from 'next/image'

import styles from '../styles/components/ComingSoon.module.css'

const CommingSoon = () => {
  return (
    <div className={styles.content}>
      <section className={styles.imageContainer}>
        <img
          src="/assets/images/section-5.png"
          alt="Nanny Share Daily Diary"
          width={216}
          height={96}        
        />
      </section>
      <section>
        <h3>Coming soon: Nanny Share Daily Diary!</h3>
        <p>
          With the Hapu daily diary your nanny will be able to update you and
          your sharers with photos and commentary of the day. You and sharers
          will receive notifications and you’ll be able to login to view the
          daily adventures fo your little ones. We can’t wait!
        </p>
      </section>
    </div>
  )
}

export default CommingSoon
