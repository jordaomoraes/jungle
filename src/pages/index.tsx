import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ShareHome from '../components/ShareHome'
import NewsLetter from '../components/Newsletter'
import Payments from '../components/Payments'
import Framework from '../components/Framework'
import CommingSoon from '../components/CommingSoon'
import Booking from '../components/Booking'
import ExperimentProvider from '../contexts/experiment'
import getRandomVariant from '../libs/getRandomVariant'
import styles from '../styles/components/Home.module.css'

const Home = ({ experimentVariant }) => (
  <Layout
    pageTitle={experimentVariant.data.title}
    description={experimentVariant.data.description}
  >
    <ExperimentProvider experimentVariant={experimentVariant}>
      <Hero />
    </ExperimentProvider>

    <main className={styles.main}>
      <Booking />
      <ShareHome />
      <hr className={styles.divider} />
      <NewsLetter />
      <hr className={styles.divider} />
      <Payments />      
      <hr className={styles.divider} />
      <Framework />
      <hr className={styles.divider} />
      <CommingSoon />       
    </main>
  </Layout>
)

export const getServerSideProps = () => {
  const experimentVariant = getRandomVariant()

  return {
    props: {
      experimentVariant,
    },
  }
}

export default Home
