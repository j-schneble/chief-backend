import { cn } from '../../lib/classNames'

interface CheckmarkProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Checkmarktool({
   
  
    icon,
   
  }: CheckmarkProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            '',
            'rounded-lg ',
            
          )}
         
          target='_blank'
          rel='noopener noreferrer'
        >


        <div className='flex w-full p-3 mt-3 ml-8 rounded-sm shadow-2xl filter-blur z-5'>
        <div className='text-xl rounded-full gradico '>{icon}</div>
         
            </div>
   
        </a>
      )
    }