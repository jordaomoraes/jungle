import styles from '../styles/components/Framework.module.css'

const Framework = () => {
  return (

    <article className={styles.content}>
      <section>
        <h3>A framework built for the long term</h3>
        <p>
          Childcare is for the long term. And you need a framework you can
          count on that gives your share long term viability and success.
          That’s why we’ve defined Hapu around our three tribal principles;
          clearly defined process, transparency over money and equality of
          participation.
        </p>   
          <a>Read how Hapu’s tribal background defines our app</a>    
      </section>
      <section className={styles.HiddenMobile}>
        <img
          src="/assets/images/section-4.png"
          alt="A framework built for the long term"
          width={984}
          height={392}
        />
      </section>
    </article>
  )
}

export default Framework

