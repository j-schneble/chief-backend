import { cn } from '../../lib/classNames'

interface ServiceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Servicetool({
    name,
  
    icon,
    url,
  }: ServiceProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            '',
            'rounded-lg ',
            
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
         
            
          
         <div className='flex items-center text-center border-black shadow-2xl border-r-1 justify-items-center justify-evenly ring-1 ring-black/10 nf1 filter-blur z-5'>

          <div className='p-2 text-2xl rounded-full text-amber-500 nf2x1'>{icon}</div>

          <h2 className='items-center px-2 pl-3 text-xl font-medium text-center text-gray-200 font-sfprodisplayregular '>{name}</h2>
          </div>
       
   
        </a>
      )
    }