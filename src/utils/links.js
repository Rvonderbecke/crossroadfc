import {IoBarChartSharp} from 'react-icons/io5'
import {MdQueryStats} from 'react-icons/md'
import {FaWpforms} from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
    {
        id: 1,
        text: 'Summary',
        path: '/',
        icon: <IoBarChartSharp />
    },
    {
        id: 2,
        text: 'Trip Outreach',
        path: 'trip',
        icon: <MdQueryStats />
    },
    {
        id: 3,
        text: 'Taekwondo',
        path: 'taekwondo',
        icon: <MdQueryStats />
    },
    {
        id: 4,
        text: 'Bid Democracy',
        path: 'biddemocracy',
        icon: <FaWpforms />
    },
    {
        id: 5,
        text: 'Profile',
        path: 'profile',
        icon: <FaWpforms />
    },

];
export default links