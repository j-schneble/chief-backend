import {  
    MdDynamicFeed
} from 'react-icons/md'

import {
    FaUserCheck,
    FaUsersCog
} from 'react-icons/fa'


interface Tool {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Platforms {
    name: string
    url: string
    icon?: React.ReactNode
}

export const ToolBox: Tool[] = [
    {
        name: 'Dynamic comparison arrows',
        icon : < MdDynamicFeed />,
        url: "https://getchiefanalytics.com/",
    },

    {
        name : 'Customized for your business',
        icon: <FaUserCheck />,
        url: "https://getchiefanalytics.com/",
    },
    {
        name: 'Data range, User type, & Data filters ',
        icon: < FaUsersCog />,
        url: "https://getchiefanalytics.com/",
    },
    
]















