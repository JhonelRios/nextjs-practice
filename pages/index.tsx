import Head from 'next/head'

import Header from '@components/Header';

export default function Home() {

  return (
    <>
      <Head>
        <title>All about Next.js</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
