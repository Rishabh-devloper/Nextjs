'use client'

import Link from 'next/link'
import path from 'path'
import { title } from 'process'
import React, { useState } from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState('')

  const navigations = [
    {title: 'Login' , href:'/login'},
    {title: 'Register' , href:'/register'}
  ]
  return (
    <>
      <div className=' p-[10px] bg-[rgb(129,148,183)]'>
        {
          navigations.map(nav => {
            return(
              <Link className='p-3' key={nav.title}  href={nav.href}>{nav.title}</Link>
            )
          })
        }
      </div>
      <div>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      </div>
        {children}
    </>
    
  )
}

export default RootLayout