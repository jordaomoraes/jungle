import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/Payment.module.css'

const Payments = () => {
  return (
    <div className={styles.content}>
    <section>
      <img
        src="/assets/images/section-3.png"
        alt="Shared payments made simple"
        width={456}
        height={336}
      />
    </section>
    <section>
      <h3>Shared payments made simple</h3>
      <p>
        Sometimes it’s hard enough just sharing a restaurant bill. Try
        sharing that bill week in, week out and you might encounter more
        than a few snares. But not with Hapu. Simply set your rates and our
        automated payment system takes care of the rest. You need never talk
        money or who owes what.
      </p>
     
        <a>Read how Bridget’s share (without Hapu) ended over $15</a>
    
    </section>
  </div>

  )
}

export default Payments

