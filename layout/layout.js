import styles from '../styles/Layout.module.css';

export default function Layout({children}){
    return(
        <div className='flex mt-20 bg-black'>
            <div className='grid w-1/3 m-auto  bg-slate-50 h-3/4 '>
                
                <div className='flex flex-col  bg-black justify-evenly'>
                <div className='py-10 text-center  text-black'>
                {children}
                </div>             
                </div>
            </div>
        
        </div>
    )
}