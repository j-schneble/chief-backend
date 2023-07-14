import type { NextPage } from 'next'

import NextLink from 'next/link'
import Image from 'next/image'
import useInView from 'react-cool-inview'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link,
  Heading,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Tools from './tools'
import Platforms from './platforms'
import {HiChartSquareBar} from 'react-icons/hi'
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import Guestcontainer from '../components/Container/Guestcontainer';
import { useRouter } from 'next/router'
import { BiLogIn } from 'react-icons/bi'

export const Mainguest = () => {

const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

    return (
  
      <div>
        <nav className='sticky w-full py-3 stickyy   z-[1] top-4 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex justify-between items-center'>
            <button
              className='flex items-center justify-center flex-none text-2xl font-semibold leading-none text-gray-100 rounded shadow-sm cursor-pointer dark:text-gray-50 hover:text-gray-1000 dark:bg-transparent dark:hover:text-white dark:hover:border-opacity-50 '
              onClick={() => setIsOpen(!isOpen)}
            >
                <Image         
                        width='78'
                        height='78'
                        className=''                 
                        src="/images/Chief-Analytics-Favicon.png"
                        alt='chief'                          
                        />
              <div className='grid items-center grid-rows-1 gap-1 px-2 pt-3 text-center place-content-evenly'>
              <h1 className='text-3xl font-semibold tracking-widest text-white font-sfprodisplayregular'>CHIEF ANALYTICS</h1>
              <h1 className='pr-1 text-sm font-light tracking-wider text-gray-200 font-sfprodisplaylight'>BUSINESS INTELLIGENCE FOR EXECUTIVES</h1>
              </div>
            </button>
            <div className=''>
           <Link className='absolute grid items-center justify-center grid-cols-2 py-1 pl-2 tracking-wide text-white rounded-sm bg-zinc-900/20 font-sfprodisplayregular nblur ring-1 ring-gray-800 right-12 top-12' href={'/login'}><h1 className='flex items-center pl-1 justify-evenly'>Login </h1><div className='flex items-center justify-evenly'> <BiLogIn size={22}/></div></Link> 
        </div>           
          </nav>       
        <div className='grid items-center grid-rows-1 gap-1 pt-10 pb-1 mt-24 text-center place-content-evenly '>        
           <h1 className='flex items-center pb-1 font-light tracking-tight text-center text-7xl text-amber-500 take place-content-evenly indent-1 font-sfprodisplayregular'>
              Take control over your marketing spend with
              </h1>
              <div className='flex items-center pt-2 text-center justify-evenly'>
              <h1 className='pl-2 font-light tracking-wide text-white text-7xl font-sfprodisplayregular'>the
           <span className='pl-2 font-semibold tracking-wide text-white text-7xl font-sfprodisplayregular'>
               Chief Analytics Dashboard™ 
              </span>
              </h1>
              </div>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
          <h1 className='flex items-center pt-1 pb-2 text-3xl tracking-widest text-center text-white font-heavy thefirst place-content-evenly indent-1 tx hov font-sfprodisplayheavy'> 
               ↓  
               </h1>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
        <h1 className='flex items-center text-4xl tracking-widest text-center text-white thefirst place-content-evenly indent-1 tx hov font-sfprodisplaylight'>
            The first all-in-one KPI dashboard built for executives 
            </h1>
        </div>

        <Box className='mt-3 mb-16 '> 
          <div className='grid items-center grid-cols-1 gap-4 p-3 text-center place-content-evenly homecallgc item-center place-items-evenly'>
          <div className="grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly ">
  <div className='rounded-sm bgdark ring-4 ring-amber-500'>
  <a className="flex items-center gap-4 px-4 py-4 text-xl text-center rounded-sm font-sfprodisplayregular " href="#popup1"><span className='text-2xl text-white txtsh thefirst dark:hover:text-opacity-75'> Book Your Free Demo</span><p className='text-white dark:hover:text-opacity-75'><HiChartSquareBar className='dark:hover:text-opacity-75' color='white' size={25} /></p></a></div>
</div>
          </div>         
        </Box>
        <div className='grid items-center justify-center grid-cols-2 gap-5 pl-4 ml-32 text-center mt-28 max-w-7xl '> 
        <div className=''>
         <div className='relative '>        
           <Image
             src="/assets/chhief.png"           
             width="1480"
             height="983"        
             className=''
             alt='Summary image'
           />      
         </div>
         </div> 
       
       <div className='pt-4 '>
      <div className=''>
      <h1 className='pl-20 font-semibold text-left text-amber-500 whitespace-nowrap btwi font-sfprodisplayregular'>
             Focused on the KPIs that matter
              </h1>
               <h1 className='pt-2 pb-1 pl-20 mb-4 text-left text-gray-200 whitespace-pre-wrap monitor take font-sfprodisplaylight'> 
              Monitor the profitability behind your marketing efforts. Track sales, leads, cost, and returns with a single click.
              </h1>               
              <div className='flex items-center pt-6 pb-6 pl-20 mt-2'>
              <Tools />
              </div>           
      </div>     
              </div>         
              </div>
              <div className='w-full h-24 mt-20 mb-20 '>
     <div className='grid items-center h-24 grid-rows-1 text-center justify-evenly justify-items-center nblur'>
     <h1 className='text-xl text-gray-200 thefirst2 txtsh font-sfprodisplaylight'>
            An experience you would expect from a professional tool. </h1>
     </div>       
        </div>
        <div className='ml-4 max-w-7xl'>
        <h1 className='font-semibold btwi integrates font-sfprodisplaysemibold text-amber-500'> 
        Integrates with the platforms that drive your business
              </h1>
        <h1 className='w-full mt-4 tracking-wider text-left text-gray-200 monitor take font-sfprodisplaylight mobilewidth '> 
        Our dashboard pulls real-time data from the most prominent platforms on the web to deliver key metrics in one central location. Replace your weekly or monthly reports with on-demand marketing insights.
              </h1>  
        </div>
            
              <div className='grid grid-cols-2 py-4 mt-6 '>
        <div className='mt-10 '>
        <Platforms />
            </div>
            <div className='relative alticsde '>       
        <Image
          src="/images/inpic.png"      
          width="1517"
          height="1340"        
          className='apic'
          alt='Summary image'
        />  
      </div>
</div>         
      <div className='grid items-center grid-cols-1 py-4 mt-10 text-center justify-items-center justify-evenly '>
       <div className='p-6 px-2 pt-2 bg-amber-500 apap2'>
            <div className='grid grid-cols-2 z-2'>
              <div className='rounded-sm bgdark apap'>
                <div className='flex p-2 mt-3'>
                  <h1 className='flex items-center ml-3 text-lg text-center text-amber-500 font-sfprodisplayregular '>
                    Ready to learn more?
                  </h1>                  
                  </div>
                  <div className='grid grid-cols-1 p-2 mt-8 mb-5'>
                  <h1 className='flex items-center text-3xl font-light text-center text-white justify-evenly justify-items-center font-sfprodisplayregular'>
                  We would love to show you the Chief Analytics Dashboard™ and answer any of your questions.
                  </h1>
                </div>            
                <div className='grid grid-cols-1 gap-2 mt-4 mb-2 place-content-evenly contmobgroup place-items-evenly'>
<div className='flex px-6 py-2 mt-6 bgdark justify-evenly justify-items-center'>
<div className='flex px-3 bg-white rounded-sm ring-1 ring-gray-900 start'>
<h1 className='flex items-center pr-2 text-lg font-semibold text-center text-black nblur justify-items-center justify-evenly whitespace-nowrap contmobphrase font-sfprodisplaysemibold'>
LETS GET STARTED
</h1>
<Image
                    
     width='40'
     height='44'
     className='flex px-1 '
     src="/chief/cd.png"
     alt='prime'
     />               
            </div>            
    </div>
</div>
   </div>
</div>    
       </div>
       </div>
       </div>

    )
}

export default Mainguest

