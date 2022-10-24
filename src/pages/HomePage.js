import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, HomePageWrapper } from '../styles';
const ads = 2;

const HomePage = () => {
	const [currentCount, setCurrentCount] = useState(0);

	useEffect(() => {
		document.getElementById(`${currentCount}`).classList.add('active');
	}, [currentCount]);
// 	setTimeout(() => {
// 		setCurrentCount(+1)
	
// }, 5000)
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
								document.getElementById(`${currentCount}`).classList.remove('active');
								return;
							}
							setCurrentCount(currentCount + 1);
							document.getElementById(`${currentCount}`).classList.remove('active');
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
						<Link to='/tkd' >
							<button className='btnHome homeBtnTkd'>Taekwondo</button>
						</Link>
						<Link to='/trip' >
							<button className='btnHome homeBtnTrip'>Trip Outreach</button>
						</Link>
						<Link to='/yotae'>
							<button className='btnHome homeBtnYotae'>Yotae</button>
						</Link>
						<Link to='/behavioral'>
							<button className='btnHome homeBtnBehav'>Behavioral</button>
						</Link>
						<Link to='/aboutus'>
							<button className='btnHome homeBtnAbout'>About Us</button>
						</Link>
					</div>
				</Row>
			</div>
		</HomePageWrapper>
	);
};
export default HomePage;
