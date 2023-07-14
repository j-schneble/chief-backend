import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../layout/layout';
import Link from 'next/link';
import { useState } from 'react';
import { getSession,  useSession, signOut } from 'next-auth/react';
import { Container } from '@chakra-ui/react';
import { SideOption } from '../SideOption'
import Iframe from 'react-iframe'
import { Mainguest  } from './mainguest.tsx'


export default function Home() {

  const { data:session } = useSession()
 
  function handleSignOut(){
    signOut()
  }
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

    {session ? User({ session, handleSignOut }):Guest() }
  </div>
  )
}

// Guest



function Guest(){
  return(
 
<Mainguest />
         
   
  )
};

// user@1company.com // user1234
// user@2company.com // user1234
// user@3company.com // user1234

//  <h3 className='text-4xl font-bold'>Guest Homepage</h3>
// <div className='flex justify-center'>
// <Link href={'/login'}><p className='px-10 py-1 mt-5 text-gray-700 rounded-sm bg-amber-500'>Sign In</p></Link>
//  </div>

// should login default be website performance report or a main dashboard hub
// current - default=website performance report with pop up dash choices



// Authorize User

function User({ session, handleSignOut }){

  
  
  return(
    <Container>
    
 

 

   
              
<section className=''>
   
    <SideOption />
 
  <div className="w-full pt-20  z-[1] top-2 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex justify-between items-center">

  <div className='flex items-center justify-center ml-32 pl-28'>
  
  <Iframe  src="https://datastudio.google.com/embed/reporting/b331d8ec-e7d5-4771-840c-34e79a0b7e1a/page/VgD" 
    frameborder="0" 
    width="1420px" height="900" 
    id=" " 
    display="block"
    position="relative"
   ></Iframe>
   
  </div>
 
  
        
    </div>
  

    
   
 </section>
 <div className='w-full h-10 mb-6 bg-white z-2 flex-items-center '>

 <div className='pb-6'>

 </div>
   </div>


 
</Container>
  )
};
    {/* <p href="#" className="flex items-center ">
        <Image src="/assets/Chief-Analytics-Favicon.png" width={65} height={65} class="" alt="Flowbite Logo" />
        <div className='grid items-center grid-rows-1 gap-1 px-2 pt-2 text-center place-content-evenly'>
        <span className="self-center text-2xl font-semibold tracking-widest text-zinc-100 whitespace-nowrap">CHIEF ANALYTICS</span> 
         <span className='pr-8 text-lg tracking-widest font-extralight text-gray-200/75 '>DASHBOARD HUB</span> 
        </div>
    </p> 
    <div className="hidden mt-1 md:block md:w-auto" id="mobile-menu">
      <div className="flex items-center mt-4 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium">
        <div className='pr-4 '>
          <h1 className='text-lg font-light '>Welcome,</h1>
        </div>     
        <div className='flex items-center text-lg font-medium'>
         
          {session.user.email}
          
         
          <h1 className=''><DropdownButton1 /></h1>
        </div>
        <div className=''>
        
        </div>
      </div>
    
      </div>
  </div>
  

  <div className='flex justify-center'>
    <button onClick={handleSignOut} className='px-10 py-1 mt-5 text-white rounded-sm shadowbox'>
      Sign Out
    </button> 
  </div>  */}
    
           {/**     <div className=' w-full  pt-7  z-[1] top-2 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex justify-between items-center'>
                <div className='grid w-full grid-cols-2 gap-72 justify-evenly'>
                <div className='flex items-center justify-center px-2 pt-2 pb-1 mr-10 text-center place-content-evenly'>
           <div className='p-1 rounded-md'>
                <Image
                          layout='fixed'
                         width='40'
                         height='40'
                          className=''
                           
                            src="/assets/Chief-Analytics-Favicon.png"
                          alt='prime'
                           
                        />
                        </div>
              
              <h1 className='flex items-center justify-center px-3 mt-1 text-2xl font-light tracking-wider text-amber-500 '>Dashboard Hub</h1>
              
              </div>
              <div className='flex items-center justify-center ml-20'>
      <button onClick={handleSignOut} className='px-10 py-1 mt-5 font-light tracking-wide text-gray-200 rounded-sm text-md '>Log Out</button>
      </div>
              

              </div>
              </div>
    <main className='container py-20 mx-auto text-center'>
    <div className='grid items-center justify-center grid-cols-3'>
    <div className='flex justify-center'>
        <Link href={'/profile'}><p className='px-10 py-1 mt-5 text-gray-700 rounded-sm bg-amber-500'>Profile Page</p></Link>
      </div>
    <div>
    <h3 className='text-4xl font-bold'>Dashboard Hub</h3>
    </div>
   

    </div>
    

      <div className='details'>
        <h5>{session.user.email}</h5>
        <h5>Unknown</h5>
      </div>
      <div className=''>

     
      <div className='grid grid-cols-3 gap-72 max-w-9xl justify-evenly'>
      <div className='mr-20'>
      <h3 className='text-4xl font-bold'>Dashboard Hub</h3>
      </div>
      <div className='ml-20'>
      <button onClick={handleSignOut} className='px-10 py-1 mt-5 text-gray-700 rounded-sm bg-amber-500'>Sign Out</button>
      </div>
      </div>
      </div>
   
      */} 
    

   
      { /*** 
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center ml-5">
        <Image src="/assets/Chief-Analytics-Favicon.png" width={40} height={40} class="" alt="Flowbite Logo" />
        <span className="self-center ml-5 text-2xl font-light tracking-wider whitespace-nowrap text-amber-500">Dashboard Hub</span>
    </a>

    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block mt-1 mr-4 font-light text-white bg-blue-700 rounded text-md md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{session.user.email}</a>
        </li>
        <button id="states-button" data-dropdown-toggle="dropdown-states" class="">
    <Image  src="/assets/avatar2.png" width={30} height={30} alt="user photo" />
    </button>
    
    <label for="states" class="sr-only"></label>
    <select id="states" class=" focus:ring-blue-500 focus:border-blue-500 block w-6  bg-gray-900 text-lg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="none"></option>
       <option type='submit' className='text-gray-700 rounded-sm bg-amber-500'><button onClick={handleSignOut} >Sign Out</button></option>
        <option value="TX">Texas</option>
        <option value="WH">Washinghton</option>
        <option value="FL">Florida</option>
        <option value="VG">Virginia</option>
        <option value="GE">Georgia</option>
        <option value="MI">Michigan</option>
    </select>
      

    
    


</ul>
    </div>
  </div>
</nav>

<div class="flex ">
    <button id="states-button" data-dropdown-toggle="dropdown-states" class="">
    <Image  src="/assets/avatar2.png" width={30} height={30} alt="user photo" />
    </button>
        <button id="states-button" data-dropdown-toggle="dropdown-states" className="px-1 py-1 bg-white/50 ">
    <Image  src="/assets/avatar.png" width={30} height={30} alt="user photo" />
    </button>
    <label for="states" class="sr-only">Choose a state</label>
    <select id="states" class=" focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{session.user.email}</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="WH">Washinghton</option>
        <option value="FL">Florida</option>
        <option value="VG">Virginia</option>
        <option value="GE">Georgia</option>
        <option value="MI">Michigan</option>
    </select>
</div>
*/}

  

      
  



