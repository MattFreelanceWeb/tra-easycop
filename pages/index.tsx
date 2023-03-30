import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TRA-easycop</title>
        <meta name="description" content="the easiest way to calculate TRA difficulty points" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' text-red-500'>
      hello world
      </main>
    </>
  )
}