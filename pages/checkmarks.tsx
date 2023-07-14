import Checkmark from '../components/tool/CheckmarkTool'
import { CheckmarkBox } from '../components/tools/checkmarkBox'

const Checks = () => {
  return (

   
   <div>
           <div className='flex items-center justify-between'>      
                   
                 
                   
                   </div>
                   <div
                   className='rounded-sm '
                  >
   <div className='flex items-center text-center '>
            <div className='grid w-full grid-cols-3 gap-6 whitespace-nowrap mobexp'>
                    {/* Lazy */}
          {CheckmarkBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(checkmark => (
            <Checkmark
            key={checkmark.name}
            name={checkmark.name}            
            url={checkmark.url}
            icon={checkmark.icon}
            />
          ))}
         </div>
                    </div>
                    </div>
            </div>

  )
}
export default Checks