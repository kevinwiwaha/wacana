import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Particles from "react-tsparticles";
import Image from 'next/image'
import logo from '../public/logo.svg'
import googleLogo from '../google.png'
import hero from "../public/hero.jpg"
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  
 
  const particlesInit = (main) => {
    console.log(main);

  };
  const Page = dynamic(() => import('./components/Page'), {
    ssr: false,
  });
  const particlesLoaded = (container) => {
    console.log(container);
  };
  if (session) {
    console.log(session);
    return (
      <div>
      <section>
        <div className="flex">
          <div className='bg-red-500 w-6/12 h-screen'></div>
          <div className='w-6/12 h-screen'>
            <div className="flex justify-center h-full items-center">
              <div>
                
                <h3 className='font-bold text-3xl'>Loged in as {session.user.name}</h3>
                <h1 className='mb-10'>Wacana help us to maintain hangout planning in better visualization</h1>
                <div className="w-10/12 mb-8"><Image layout='responsive' className='rounded-md' src={hero} alt={'hero-img'}></Image></div>
                <button onClick={() => signOut()} className='flex items-center  bg-blue-500 rounded-md   text-xs text-white font-semibold'>
                  <div className='my-1 ml-1 w-10 h-full bg-white rounded-md justify'>
                    <Image className='' src={googleLogo} alt={'google-sign-up'}></Image>
                  </div>
                  <p className='text-base ml-5 mr-5'>Sign out</p>
                </button>
                <small className=''>This site is protected by 💗 kindful heart </small><br />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    )
  }
  return (
    <div>
      <section>
        <div className="flex">
          <div className='bg-red-500 w-6/12 h-screen'></div>
          <div className='w-6/12 h-screen'>
            <div className="flex justify-center h-full items-center">
              <div>
                
                <h3 className='font-bold text-3xl'>Sign Up to Wacana</h3>
                <h1 className='mb-10'>Wacana help us to maintain hangout planning in better visualization</h1>
                <div className="w-10/12 mb-8"><Image layout='responsive' className='rounded-md' src={hero} alt={'hero-img'}></Image></div>
                <button onClick={() => signIn('google')} className='flex items-center  bg-blue-500 rounded-md   text-xs text-white font-semibold'>
                  <div className='my-1 ml-1 w-10 h-full bg-white rounded-md justify'>
                    <Image className='' src={googleLogo} alt={'google-sign-up'}></Image>
                  </div>
                  <p className='text-base ml-5 mr-5'>Sign up with Google</p>
                </button>
                <small className=''>This site is protected by 💗 kindful heart </small><br />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
