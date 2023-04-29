import Header from '@/components/Header'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Faeze Mohrechi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div style={{ position: "sticky", top: 0 }}>
          <Header />
        </div>

        <div style={{ minHeight: "100vh", background: "#231f20", paddingTop: 80 }}>
          <div className='container mx-auto box-border'>
            <div className='grid pb-4 items-center'>
              <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7'>
                <div>
                  <p className='color6 text-base md:text-lg' style={{}}>Hi, my name is</p>
                  <p className='color4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl weight-600'>Faeze Mohrechi</p>
                  <p className='color5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl weight-600'>I build things for web.</p>
                </div>
              </div>

              <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-12'>
                <img className='w-100 h-100' src='/images/Microsites-amico.svg' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
