import {MdOutlineGavel} from 'react-icons/md'
import {FcAbout} from 'react-icons/fc'
import {FaPeopleCarry} from 'react-icons/fa'
import {ReactComponent as Tkd} from '../assets/images/tkd.svg'

const landingLinks = [
    {
        id: 1,
        text: 'Taekwondo',
        path: '/tkdinfo',
        icon: <Tkd className="tkdGuy"/>
    },
    {
        id: 2,
        text: 'Trip Outreach',
        path: '/tripinfo',
        icon: <FaPeopleCarry />
    },
    {
        id: 3,
        text: 'Bid Democracy',
        path: '/bidinfo',
        icon: <MdOutlineGavel />
    },
    {
        id: 4,
        text: 'About Us',
        path: '/aboutus',
        icon: <FcAbout />
    },
    
];
export default landingLinks