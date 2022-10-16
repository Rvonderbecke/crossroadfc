import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, HomePageWrapper } from '../styles';
const ads = 2;

const HomePage = () => {
	const [currentCount, setCurrentCount] = useState(0);

	useEffect(() => {
		document.getElementById(`${currentCount}`).classList.add('active');
		return function () {
			document.getElementById(`${currentCount}`).classList.remove('active');
		};
	}, [currentCount]);

	return (
		<HomePageWrapper>
			<div className='homePageContainer'>
				<Row>
					<img
						src={`images/ad${currentCount}.jpg`}
						alt='Current Promotions'
						onClick={() => {
							if (currentCount >= ads) {
								setCurrentCount(0);
								return;
							}
							setCurrentCount(currentCount + 1);
						}}
					/>
					<div className='dots'>
						<span id='0' className='dot'></span>
						<span id='1' className='dot'></span>
						<span id='2' className='dot'></span>
					</div>
				</Row>
				<Row>
					<p>Learn More! Click on the links below.</p>
					<div className='homeLinks'>
						<Link to='/tkd' reloadDocument>
							<button className='btnHome homeBtnTkd'>Taekwondo</button>
						</Link>
						<Link to='/trip' reloadDocument>
							<button className='btnHome homeBtnTrip'>Trip Outreach</button>
						</Link>
						<Link to='/'>
							<button className='btnHome homeBtnYotae'>Yotae</button>
						</Link>
						<Link to='/'>
							<button className='btnHome homeBtnBehav'>Behavioral</button>
						</Link>
						<Link to='/'>
							<button className='btnHome homeBtnAbout'>About Us</button>
						</Link>
					</div>
				</Row>
			</div>
		</HomePageWrapper>
	);
};
export default HomePage;
