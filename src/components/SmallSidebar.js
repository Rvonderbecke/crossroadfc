import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import NavLinks from './Navlinks';

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar, user } = useAppContext();
	console.log(user.admin)
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}>
				<div className='content'>
					<button type='button' className='close-btn' onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggleSidebar} />
				</div>
			</div>
		</Wrapper>
	);
};
export default SmallSidebar;
