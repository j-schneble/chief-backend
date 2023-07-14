import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import splitbee from '@splitbee/web'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '../../lib/classNames'
import { BiLogIn } from 'react-icons/bi'
import { signIn } from 'next-auth/react';

interface IContainerProps {
  back?: {
    href: string
    label: string
  }

  showNav?: boolean


  title?: string
  description?: string
  image?: string

  [key: string]: any

  date?: any
}

export default function Guestcontainer({
  footer = true,
  back,

  showNav = true,

  title = 'Chief Analytics.',
  description = 'Chief Analytics',
  image = '',
  date,
  ...props
}: IContainerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const meta = {
    title,
    description,
    image,
    type: 'website',
    date,
    props,
  }
  splitbee.init()



  return (
    <>
  
    
        <Head>
         
          <meta name='robots' content='follow, index' />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Chief Analytics' />
          <meta property='og:description' content={meta.description} />
          <meta name='ogdescription' content={meta.description} />
          <meta name='og:image' content={meta.image} />
        
        </Head>

       
           <nav className='sticky w-full py-8 bg-stickyy dark:bg-stickyy  z-[1] top-2 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex justify-between items-center'>
            <button
              className='text-2xl button-primary-y '
              onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                          layout='fixed'
                         width='48'
                         height='51'
                          className=''
                           
                            src="/images/ch.png"
                          alt='prime'
                           
                        />
                      
              <div className='grid items-center grid-rows-1 gap-1 px-2 pt-3 text-center place-content-evenly'>
              <h1 className='text-3xl font-semibold tracking-widest text-white font-sfprodisplayregular'>CHIEF ANALYTICS</h1>
              <h1 className='pr-1 text-sm font-light tracking-wider text-gray-200 font-sfprodisplaylight'>BUSINESS INTELLIGENCE FOR EXECUTIVES</h1>
              </div>
            </button>
            <div className=''>
            <button className='absolute grid items-center justify-center grid-cols-2 py-1 pl-2 tracking-wide text-white rounded-sm bg-zinc-900/20 font-sfprodisplayregular nblur ring-1 ring-gray-800 right-12 top-12'
         
        >
        
          <Link href={'/login'}><p className='flex items-center pl-1 justify-evenly'>Login </p><div className='flex items-center justify-evenly'> <BiLogIn size={22}/></div></Link>
      
         
           
  
 
         
       
        </button>
        </div>
                     
           
            
          </nav>
       
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
           
          </m.div>
        </LazyMotion>
 
    </>
  )
}
