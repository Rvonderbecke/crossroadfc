import landingLinks from '../utils/landingLinks.js';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext.js';
const LandingLinks = () => {
	const { showSidebar, toggleSidebar } = useAppContext();
	return (
		<div className='landing-links'>
			{landingLinks.map((link) => {
				const { text, path, id, icon } = link;

				return (
					<NavLink
						to={path}
						className={({ isActive }) =>
							isActive ? 'nav-link active form' : 'nav-link form'
						}
						key={id}
						onClick={toggleSidebar}>
						<span className='icon'>{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};
export default LandingLinks;