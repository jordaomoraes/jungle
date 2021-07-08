import Head from 'next/head'
import Header from '../components/Headers'
import Footer from '../components/Footer'
import Navbar from './Navbar'

const Layout = ({ pageTitle, description, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />           
      </Head>
      <Header>
        <Navbar />
      </Header>    
      {children}       
      <Footer />   
    </>
  )
}

export default Layout
