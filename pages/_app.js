import Head from 'next/head';
import Layout from '../components/layout/Layout'
import CookieAccept from '@/components/cookeAccept/CookieAccept';
import '../styles/pages/index.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />  
      <CookieAccept/>
    </Layout>
  )
}
