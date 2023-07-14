import Link from 'next/link';
import { getSession, useSession, signOut } from 'next-auth/react';
import { Container } from '@chakra-ui/react';
import { DropdownButton1 } from './drop'
import Image from 'next/image';


// eslint-disable-next-line react/display-name
export default function Profile()  {
  

    function handleSignOut(){
        signOut()
      }

      const { data:session } = useSession()
      
    return (
       
     <div>

    
        <div className='container'>
        <p href="#" className="flex items-center ">
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
  </div> 
  <Link href={"/"}>Home Page</Link>
      </div>
      
      
     
         
        
         
     
    )
}

export async function getServerSideProps({ req }){
    const session = await getSession({ req })

    if(!session){
        return{
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }
// authorize user return session
    return {
        props: { session }
    }
}