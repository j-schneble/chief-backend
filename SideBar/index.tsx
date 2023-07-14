import { useState } from "react";
import Link from 'next/link';
import { Container, Content, ClosedSideBar, OpenSideBar } from "../SideBar/styles";
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


export function SideBar() {
	const [sideBar, setSideBar] = useState(false);
 
    const { data:session } = useSession()
 
    function handleSignOut(){
      signOut()
    }
   
	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
									
						<nav className='shadowbox' >
							<button onClick={handleChangeSideBar}>
							<BsArrowRight />
							</button>

							

							{/* Links principais do app */}
							<ul>
                                
                                <Link className='text-amber-500' href="/" title="Alguma coisa">
                                <FaUserAlt />
                                </Link>   
								<Link href="/" title="Alguma coisa">
									<DiReact />
								</Link>
								<Link href="/" title="Alguma coisa">
									<DiReact />
								</Link>
                                <Link href="/" title="Alguma coisa">
									<DiReact />
								</Link>
                                <Link href="/" title="Alguma coisa">
									<DiReact />
								</Link>
                                <Link href="/" title="Configurações">
									<MdSettings />
								</Link>
								<Link href="/" title="Sair da conta">
									<RiLogoutCircleRLine />
								</Link>
							
							</ul>
						</nav>
						
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
							

								{/* Icones principais do app */}
								<ul>    
                                    <Link href="/" title="Alguma coisa">
                                    <FaUserAlt />
									<h1>     {session.user.email} </h1>
                                    </Link>								
									<Link href="/" title="Alguma coisa">
										<DiReact />
										<p>Website Analytics</p>
									</Link>
									<Link href="/" title="Alguma coisa">
										<DiReact />
										<p>Google Ads</p>
									</Link>
									<Link href="/" title="Alguma coisa">
										<DiReact />
										<p>Facebook</p>
									</Link>
                                    <Link href="/" title="Alguma coisa">
										<DiReact />
										<p>Google my business</p>
									</Link>
                                    <Link href="/">
										<MdSettings />
										<p>Account settings</p>
									</Link>
									<Link href="/">
										<RiLogoutCircleRLine />
										<p> Log Out </p>
									</Link>
								</ul>
							</nav>
									</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}
