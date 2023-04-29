import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Faeze Mohrechi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className='sticky top-0'>
          <Header />
        </div>

        {/* hero section */}
        <Hero />

      </div>
    </>
  )
}
