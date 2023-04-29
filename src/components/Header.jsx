import Link from 'next/link'
import React from 'react'

export default function Header() {

  const data = [
    { name: "About", link: "" },
    { name: "Experience", link: "" },
    { name: "Work", link: "" },
    { name: "Contact", link: "" },
  ]
  return (
    <div className='primary_bg py-2' style={{ width: "100%" }}>

      <div className='container' style={{ height: "100%" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100%" }}>

          <div className=''>
            <img src='/images/fm (1).png' style={{ width: 65 }} />
          </div>

          <div style={{ display: 'flex', justifyContent: "end", alignItems: "center" }}>
            <div className='d-none d-md-flex'>
              {data.map((item, index) => {
                return (
                  <Link href="#">
                    <p className='color1 px-4'>{item.name}</p>
                  </Link>
                )
              })}
            </div>


            <div className='pl-5'>
              <button className='color2 bg4 px-3 py-1 rounded-lg'>
                <p>Resume</p>
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
