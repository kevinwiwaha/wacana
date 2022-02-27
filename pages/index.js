import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particles from "react-tsparticles";
import logo from '../public/logo.svg'
export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='container mx-auto mt-5'>
      <div className="navbar sticky top-0">
        <div className="flex-1">
          <Image className='py-0' src={logo} alt={'wacana'} width={50} height={50}
          ></Image>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a className='tracking-widest mx-6'>HOME</a></li>
            <li><a className='tracking-widest mx-6'>HAH?</a></li>
            <li><button className="transition ease-in-out hover:scale-105 py-2 mx-6 bg-wacana-700 hover:bg-wacana-800 active:bg-wacana-900 py-0 font-semibold text-white px-7 self-center">SIGN UP</button></li>
          </ul>
        </div>
      </div>
      <div className="grid place-items-center h-auto ">
        <h1 className='font-bold text-7xl mx-56 py-80  text-transparent bg-clip-text bg-gradient-to-br
    from-[#073D3D]
    via-[#CA5B5B]
    to-yellow-500
     text-center
     background-animate'>
          Everyone want action not imagination 
        </h1>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "buble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 100,
              },
              push: {
                quantity: 2,
              }            },
          },
          particles: {
            color: {
              value: "#CFB87F",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      
    </div >
  )
}
