import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Become a nanny share host</h3>
      <span>Takes less than 5 minutes to get started</span>
      <button className={styles.button}>
        <img src="/assets/icons/calendar.svg" alt="" width={30} height={30} />
        <span>
          Create your Nanny Share
          <small>Takes less than 5 minutes</small>
        </span>
      </button>
    
        <a>Or browse local nanny-shares</a>
  
      <section>
        <div className={styles.logoContainer}>
          <img
            src="/assets/svg/logo.svg"
            alt="Hapu's Logo"
            width={64}
            height={24}
          />
        </div>
        <nav className={styles.nav}>
         
            <a>Share Your Nanny</a>
     
          
            <a>Our Story</a>
        
        
            <a>Blog</a>
        
         
            <a>Terms &amp; Privacy</a>
        
        </nav>
        <div className={styles.socials}>

          <a href="#" aria-label="Facebook">
            <img
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={18}
              height={18}
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              width={18}
              height={18}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              width={18}
              height={18}
            />
          </a>
        </div>
      </section>
      <hr className={styles.divider} />
      <small>Copyright © 2021 Jungle Challeng - Guilherme Jordão</small>
    </footer>
  )
}

export default Footer
