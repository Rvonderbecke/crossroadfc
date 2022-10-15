import { Grid, Row, Col, LandingPageWrapper } from '../styles';
import SocialFollow from '../components/SocialFollow';
import { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';
const user = false; //temp
const LandingPage = () => {
	const [user, setUser] = useState(false);

	return (
		<LandingPageWrapper>
			<Grid>
				<Row>
					<div className='headerContainer'>
						<div className='logoContainer'>
							<Link to='/'>
								<img src='images/logoCR.svg' alt='crossroad logo' />
							</Link>
							<h1>crossroad family center</h1>
						</div>
						<Link to='login' >
							<button className='btn headerBtn'>
								{user ? 'Logout' : 'Login'}
							</button>
						</Link>
					</div>
				</Row>
				<Row>
					<Outlet />
				</Row>
				<Row>
					<div className='footerContainer'>
						<Col size={1}>
							<div className='footerNavLink'>
								<Link to='/'>Privacy Policy</Link>
								<Link to='/'>Careers</Link>
								<Link to='/'>About Us</Link>
							</div>

							<SocialFollow />
						</Col>
						<Col size={1}>
							<div className='footerCenter'>
								<p>Crossroad Family Center</p>
								<img src='images/blueLogo.svg' alt='footer logo' />
								<p>&#169; Copyright 2022 All rights reserved.</p>
							</div>
						</Col>
						<Col size={1}>
              <div className='footerRight'>
                <p>Subscride to our Newsletter!</p>
                <div className="subscribeElement">
								<input type='text' placeholder='Enter Email Address' />
                  <button className='subscribeBtn'>Subscribe</button>
                  </div>
							</div>
						</Col>
					</div>
				</Row>
			</Grid>
		</LandingPageWrapper>
	);
};
export default LandingPage;
