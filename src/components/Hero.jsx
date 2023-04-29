import React from 'react'

export default function Hero() {
  return (

    <div className='bg-neutral-900 min-h-screen pt-20'>
      <div className='container mx-auto box-border'>
        <div className='grid pb-4 items-center'>
          <div className='col-start-1 col-end-12 md:col-start-1 md:col-end-7'>
            <div>
              <p className='text-amber-200 text-base md:text-lg'>Hi, my name is</p>
              <p className='text-amber-100 pt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold'>Faeze Mohrechi</p>
              <p className='text-blue-400 pt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold'>I build things for web.</p>
            </div>
            <div className='max-w-xl pt-2'>
              <p className='text-blue-300 text-lg '>
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
              </p>
            </div>
          </div>

          <div className='col-start-1 col-end-12 md:col-start-7 md:col-end-12'>
            <img className='w-full h-full' src='/images/Microsites-amico.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}
