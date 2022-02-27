import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.svg'
export default function Home() {
  return (
    <div className='container mx-auto mt-5'>
      <div className="navbar">
        <div className="flex-1">
          <Image className='py-0' src={logo} alt={'wacana'} width={50} height={50}
          ></Image>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a className='tracking-widest mx-6'>HOME</a></li>
            <li><a className='tracking-widest mx-6'>HAH?</a></li>
            <li><button className="transition ease-in-out hover:scale-105 py-2 bg-wacana-700 hover:bg-wacana-800 active:bg-wacana-900 py-0 font-semibold text-white px-7 self-center">SIGN UP</button></li>
          </ul>
        </div>
      </div>
    </div >
  )
}
