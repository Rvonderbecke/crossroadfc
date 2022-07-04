import { Link } from 'react-router-dom';
import LandingLinks from '../components/Landinglinks.js';
import Wrapper from '../assets/wrappers/LandingPage.js';
import { ReactComponent as Logo } from '../assets/images/CR_Logo.svg';

const Landing = () => {
	return (
		<Wrapper className='full-page'>
			<div className='landingContainer'>
			<header>
				<Logo className='logo2' />
				<h2>Welcome to Crossroad Family Center</h2>
			</header>
			<div className='landing-links'>
				<LandingLinks />
			</div>
			<p>
				Click on the links above for more information or just dive right in!
			</p>
			<Link to='/register' className='btn btn-hero'>
				Login/Register
			</Link>
			</div>
		</Wrapper>
	);
};

export default Landing;
