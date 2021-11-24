import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  )
}