import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'

export default function Navbar() {
  return (
    <div className='container mx-auto mt-5'>
      <div className="navbar sticky top-0">
        <div className="flex-1">
          <Image layout='fill' className='py-0' src={logo} alt={'wacana'} width={50} height={50}
          ></Image>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a className='tracking-widest mx-6'>HOME</a></li>
            <li><a className='tracking-widest mx-6'>HAH?</a></li>
            <li><button className="transition ease-in-out hover:scale-105 py-2 mx-6 bg-wacana-700 hover:bg-wacana-800 active:bg-wacana-900  font-semibold text-white px-7 self-center">SIGN UP</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
