import Link from 'next/link'
import React from 'react'

export default function Header() {

  const data = [
    { name: "About", link: "#" },
    { name: "Experience", link: "#" },
    { name: "Work", link: "#" },
    { name: "Contact", link: "#" },
  ]
  return (
    <div className='bg-neutral-900 py-3 w-full'>

      <div className='container mx-auto h-full'>

        <div className='flex justify-between h-full'>

          <div className='w-16'>
            <img src='/images/FM2.png' />
          </div>

          <div className='justify-end flex md:justify-center items-center'>
            <div className='hidden md:flex'>
              {data.map((item, index) => {
                return (
                  <Link href={item.link}>
                    <p className='text-zinc-400 px-4'>{item.name}</p>
                  </Link>
                )
              })}
            </div>


            <div className='pl-4'>
              <button className='text-neutral-900 bg-amber-100 px-3 py-1 rounded-lg'>
                <p>Resume</p>
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
