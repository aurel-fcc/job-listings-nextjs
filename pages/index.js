import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job listings with Next.js</title>
        <meta name="description" content="Job listings with Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />

      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
