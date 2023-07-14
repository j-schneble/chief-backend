import {

    BsCheckSquareFill

} from 'react-icons/bs'



interface Platforms {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Checkmark {
    icon?: React.ReactNode
}

export const PlatformBox: Platforms[] = [
    {
        name: ' ✓ Google Analytics',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },

    {
        name : ' ✓ Google Ads',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },
    {
        name: ' ✓ Custom Platforms',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },
    {
        name: ' ✓ Google My Business ',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },
    {
        name: ' ✓ Facebook Ads ',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },
    {
        name: ' ✓ Complete compatibility',
        icon: <  BsCheckSquareFill/>,
        url: "https://getchiefanalytics.com",
    },
 
    
]



