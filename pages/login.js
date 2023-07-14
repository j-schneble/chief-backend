import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiOutlineLockClosed, HiOutlineUser, HiOutlineEye } from 'react-icons/hi';
import { useState } from 'react';
import { useSession, signIn,signOut } from 'next-auth/react';
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';

export default function Login(){

    const[show, setShow]= useState(false)
    const router = useRouter()

    //formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate:login_validate,
        onSubmit
    })

    async function onSubmit(values){
        const status = await signIn('credentials',{
            redirect:false,
            email:values.email,
            password:values.password,
            callbackUrl:"/"
        })

        if(status.ok) router.push(status.url)
    }
   

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl:"http://localhost:3000"})
    }
   


    return(
        <Container>
                <div className=' w-full py-8   z-[1] top-2 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex justify-between items-center'>
           <div className='flex items-center justify-center flex-none font-semibold leading-none text-gray-100 rounded shadow-sm cursor-pointer dark:text-gray-50 hover:text-gray-1000 dark:bg-transparent dark:hover:text-white dark:hover:border-opacity-50'>
                <Image
                          layout='fixed'
                         width='55'
                         height='55'
                          className=''
                           
                            src="/assets/Chief-Analytics-Favicon.png"
                          alt='prime'
                           
                        />
              <div className='grid items-center grid-rows-1 gap-1 px-2 pt-2 text-center place-content-evenly'>
              <h1 className='text-3xl font-semibold tracking-widest text-white '>CHIEF ANALYTICS</h1>
              <h1 className='pr-1 text-xs font-light tracking-widest text-gray-200 '>BUSINESS INTELLIGENCE FOR EXECUTIVES</h1>
              </div>
              </div>
              </div>
        
        <Layout>
     

        <Head>
            <title>Login</title>
        </Head>
       

            <section className='flex flex-col w-3/4 gap-8 mx-auto chiefshadbox '>
            <div className=' title'>
            <div className='flex pt-1 pb-2 justify-left '>
            <h1 className='text-4xl tracking-wider text-white '>Welcome Back</h1>
           
            </div>
                <div className='flex justify-left'>
              
                <p className='pb-3 font-light tracking-wide text-gray-300/90 '>Log in to continue using Chief Analytics. </p>
                </div>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit} >          
               <div className={styles.input_group}> 
               {formik.errors.email && formik.touched.email ? <span className='flex items-center pr-1 text-xl text-rose-600'>{formik.errors.email}</span> : <></>}    
               <span className='flex items-center pr-1 bg-black icon rounded-l-xl'>
                    <HiOutlineUser  color={'#CBD5E1'} size={20}/>
                </span>
                
                <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text2}
                {...formik.getFieldProps('email')}
                />
                
                    
               </div>
               
               <div className={styles.input_group}>  
               {formik.errors.password && formik.touched.password ? <span className='flex items-center pr-1 text-xl text-rose-600'>{formik.errors.password}</span> : <></>}
               <span className='flex items-center pr-1 bg-black icon rounded-l-xl'>
                    <HiOutlineLockClosed color={'#CBD5E1'} size={20}/>
                </span>
              
                <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
                {...formik.getFieldProps('password')}
                
                />
                  
                  <span className='flex items-center px-3 bg-black text-slate-50 icon rounded-r-xl' onClick={() => setShow(!show)}>
               <HiOutlineEye  size={18} />
               </span>
              
              
               </div> 
                      

               {/* Login Buttons */}
               <div className='input-button'>
                    <button type='submit' className={styles.button}>
                        Log In
                    </button>
               </div>

               <div className='grid items-center justify-center grid-cols-3 py-2'>
               <h2 className='flex justify-end text-xs text-zinc-100/40'>⋯⋯⋯⋯⋯⋯⋯</h2>    <h1 className='flex justify-center text-md text-zinc-100/40'>Or </h1><h2 className='flex justify-start text-xs text-zinc-100/40'>⋯⋯⋯⋯⋯⋯⋯</h2>
               </div>
           
               <div className='border-t-2 rounded-md input-button bg-neutral-900/10 border-zinc-900'>
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                         <Image src={'/assets/google.svg'} alt='none' width='19' height={19} className='pt-1 '></Image>Sign in with Google
                    </button>
               </div> 
        
            </form>
            {/* bottom */}
            <div className='flex font-medium text-left text-rose-600'>
            <h1>Forgot password? ↗︎</h1>
            </div>
            <h1 className='grid grid-cols-2 pb-2 text-left text-gray-300 '>
            Dont have an account? <Link href={'/register'}><h1 className='font-medium text-amber-500'>Sign Up</h1></Link>
            </h1>
            </section>
        
        </Layout>
        </Container>
    )
}