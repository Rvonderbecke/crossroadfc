import { Grid, Row, Col, LandingPageWrapper } from '../styles';
import SocialFollow from '../components/SocialFollow';
import axios from 'axios'
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const user = false; //temp

const activeUser = {
	name: 'New User',
	email: ''
}
const LandingPage = () => {
	const [user, setUser] = useState(activeUser);

	const handleEmailClick = async () => {
		try {
			const { data } = await axios.post('/api/sendEmail', user);
			alert(data)
			
		} catch (error) {
			alert(error)
		}
	}


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
						<Link to='login' reloadDocument>
							<button className='btn headerBtn' disabled>
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
									<input type='text' placeholder='Enter Email Address' name='email' value={user.email} onChange={(e) => {setUser({ ...activeUser, [e.target.name]: e.target.value })
									console.log(user.email)}} />
                  <button className='subscribeBtn' onClick={handleEmailClick}>Subscribe</button>
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
