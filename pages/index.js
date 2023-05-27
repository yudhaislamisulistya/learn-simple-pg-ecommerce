import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example Payment Gateway Midtrans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Link href="/pay" legacyBehavior>
            <a
              className={styles.card}>
              <h2 className={inter.className}>
                Pay <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Example Payment Gateway Midtrans
              </p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
