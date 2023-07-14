import { useState } from "react";
import Link from 'next/link';
import { Container, Content, ClosedBar } from "../SideOption/styles";
import Image from 'next/image';
import {
	
	BsArrowRight,
	BsArrowLeft
	
} from "react-icons/bs";
import { FaUserAlt, FaArrowCircleRight } from 'react-icons/fa'
import { DiReact } from 'react-icons/di';
import { 	RiLogoutCircleRLine} from 'react-icons/ri';
import {  HiSupport,   } from 'react-icons/hi'
import {   HiOutlineArrowsPointingOut, HiArrowRightCircle  } from 'react-icons/hi2'
import { IoNotificationsSharp } from 'react-icons/io5'
import { MdSettings } from 'react-icons/md'
import { getSession,  useSession, signOut } from 'next-auth/react';
import { ImStatsDots } from 'react-icons/im';

import userImg from "../public/assets/avatar2.png";


export function SideOption() {
	const [sideBar, setSideBar] = useState(false);
 
    const { data:session } = useSession()
 
    function handleSignOut(){
      signOut()
    }
   
	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container >
			
				
				
					<ClosedBar  >
						

						<div className='grid items-center justify-center grid-cols-1 gap-10'>
						<div className='flex items-center justify-evenly '><Image  src="/assets/cropfull.png" width={275} height={275} className="mt-4 " alt="Flowbite Logo" /></div>
						
						<div className='flex items-center py-1 bg-amber-500 justify-evenly'>
						<h1 className='text-lg text-white '>     {session.user.email} </h1>
						</div>
						
						<div className="grid items-center justify-center grid-cols-1 gap-10 py-10 bg-gray-500 border-t-2 border-gray-100 ">
						<Link  className='flex items-center ' href="/" title="Alguma coisa">
									
										<p className='pr-4 text-sm font-light text-gray-200 '>Navigation</p>
									</Link>
										<Link  className='flex items-center ' href="/" title="Alguma coisa">
									<ImStatsDots />
										<p className='px-4 font-light text-slate-50'>Website Analytics</p>
									</Link>
											
											<Link className='flex items-center' href="/" title="Alguma coisa">
									<ImStatsDots />
										<p className='px-4 font-light text-slate-50'>Google Ads</p>
									</Link>
												
												<Link className='flex items-center'  href="/" title="Alguma coisa">
									<ImStatsDots />
										<p className='px-4 font-light text-slate-50'>Facebook Ads</p>
									</Link>
													
													<Link className='flex items-center'  href="/" title="Alguma coisa">
									<ImStatsDots />
										<p className='px-4 font-light text-slate-50'>Google My Business</p>
									</Link>
														</div>	
									
						</div>
						
						
									
                                
								
                                  
								
								{/* Icones principais do app */}												
						<ul className='w-full pt-6 mt-5 '>
						<div className='grid items-center justify-center w-full grid-cols-1 gap-10 '>
							<div className="flex items-center">
							<Link className="flex items-center" href="/">
										<MdSettings />
										<p className='px-4 py-4 font-light text-slate-50'>Account settings</p>
									</Link>
							</div>
							<div className="flex items-center">
							<Link className="flex items-center" href="/">

									<RiLogoutCircleRLine />
							
							<button onClick={handleSignOut} className='px-4 py-4 font-light text-slate-50 '>
      Log Out
    </button> 
										
									</Link>
							</div>

						
									</div>
						</ul>
								 
                               
								<span>
							
							</span>
							
								
					
					</ClosedBar>
				
			
			
		</Container>
	);
}
