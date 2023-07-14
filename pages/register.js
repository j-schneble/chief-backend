import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiOutlineLockClosed, HiOutlineUser, HiOutlineEye } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import { register_Validate } from '../lib/validate';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';

export default function Register(){

    const [show, setShow] = useState({ password:false, cpassword:false})
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cpassword: '',
        },
        validate: register_Validate,
        onSubmit
    })

    async function onSubmit(values){
        const options = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup',options)
        .then(res=> res.json())
        .then((data)=>{
            if(data) router.push('http://localhost:3000')
        })
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
            <title>Register</title>
        </Head>
           
        <section className='flex flex-col w-3/4 gap-10 mx-auto'>
            <div className='title'>
            <div className='flex pt-1 pb-2 justify-left '>
            <h1 className='text-4xl tracking-wider text-white '>Get Started</h1>
            </div>
                <div className='flex justify-left'>
              
                <p className='pb-3 mt-2 font-light text-gray-300 '>The first all-in-one KPI dashboard. </p>
                </div>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit} >
               <div className={styles.input_group}>
               <span className='flex items-center pl-1 pr-3 bg-black icon rounded-l-xl'>
                    <HiOutlineUser  color={'#CBD5E1'} size={20}/>
                </span>
                <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps('email')}
                />
                 
               </div>
               {formik.errors.email && formik.touched.email ? <span className=' text-rose-600'>{formik.errors.email}</span> : <></>}           
               <div className={styles.input_group}> 
               <span className='flex items-center pl-1 pr-3 bg-black icon rounded-l-xl'>
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
               {formik.errors.password && formik.touched.password ? <span className=' text-rose-600'>{formik.errors.password}</span> : <></>}           
               <div className={styles.input_group}>
               <span className='flex items-center pl-1 pr-3 bg-black icon rounded-l-xl'>
                    <HiOutlineLockClosed color={'#CBD5E1'} size={20}/>
                </span>
                <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.input_text}
                {...formik.getFieldProps('cpassword')}
                />
                   <span className='flex items-center px-3 bg-black text-slate-50 icon rounded-r-xl' onClick={() => setShow(!show)}>
               <HiOutlineEye  size={18} />
               </span>
               </div> 
               {formik.errors.cpassword && formik.touched.cpassword ? <span className=' text-rose-600'>{formik.errors.cpassword}</span> : <></>}           

               {/* Login Buttons */}
               <div className='input-button'>
                    <button type='submit' className={styles.button}>
                        Sign Up
                    </button>
               </div>
            </form>
            {/* bottom */}
            <h1 className='grid grid-cols-2 pb-2 text-left text-gray-300 '>
            Already got an account? <Link href={'/login'}><h1 className='font-medium text-amber-500'>Log In</h1></Link>
            </h1>
            </section>
        
        </Layout>
        </Container>

    )
}