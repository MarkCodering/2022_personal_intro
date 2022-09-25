import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Portfolio</title>
        <meta name="description" content="Personal Portfolio Website from Mark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <footer className={styles.footer}>
        <a
          href="https://www.markchen.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel || Designed By Mark Chen
        </a>
      </footer>
    </div>
  )
}
