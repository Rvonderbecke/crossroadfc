import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  const nav = useNavigate();
    return (
      <Wrapper>
        <div className="nav-center">
          <button type='button'className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
          <div>
            <Logo />
            <h3 className="logo-text">dashboard</h3>
          </div>
          <div className="btn-container">
            <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)} >
              <FaUserCircle />
              {user && user.fullName}
              <FaCaretDown />
            </button>
            <div className={showLogout? "dropdown show-dropdown":"dropdown" }>
              <button type='button' className='dropdown-btn' onClick={logoutUser}>logout</button>
              <button type='button' className='dropdown-btn'onClick={()=>nav(`/${user._id}/account`)}>Account</button>
            </div>
          </div>
        </div>
      </Wrapper>
  )
}
export default Navbar