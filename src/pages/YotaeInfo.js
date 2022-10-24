import { Row, Col, YotaeWrapper } from '../styles';
import Card from '../components/Card';

const YotaeInfo = () => {
	return (
		<YotaeWrapper>
			<div className='yotaeContainer'>
				<Row>
					<div className='banner'>
						<h3>
							What is <br></br>Yotae?
						</h3>
						<p className='infoTxt'>
							Yotae is a mixture of the high-intensity of taekwondo and the
							stretching and strength of yoga. Mixing these two disciplines
							together gives you the best of both worlds.
						</p>
						<button className='infoBtn'>
							Sign <br></br> up
						</button>
					</div>
				</Row>
				<Row>
					<div className='cardContainerYotae'>
						<Col size={1}>
							<Card color='#FBD008'>
								<div className='cardContent'>
									<h2 className='classTitle'>Body</h2>
									<img
										className='yotaeImg body'
										src='/images/bodyIcon.svg'
										alt='tkd'
									/>
									<p className='classDesc'>
										Yotae incorporates the science of olympic sports training
										and the strength, peace of mind, and conditioning of yoga. It is
										a class that challenges you just enough to know you can do
										it and break boundaries.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#EB5050'>
								<div className='cardContent'>
									<h2 className='classTitle'>Spirit</h2>
									<img
										className='yotaeImg spirit'
										src='/images/spiritIcon.svg'
										alt='tkd'
									/>
									<p className='classDesc'>
										Enhancing the body and mind will enhance the spirit and
										allow you to lead your best life.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#5EAB77'>
								<div className='cardContent'>
									<h2 className='classTitle'>Mind</h2>
									<img
										className='yotaeImg mind'
										src='/images/mindIcon.svg'
										alt='tkd'
									/>
									<p className='classDesc'>
										Enhance your mind and feel clarity throughout your day. As you grow in your ability you start to carry that confidence around with you, improving many aspects of your life.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h2 className='classTitle'>Sweat</h2>
									<img
										className='yotaeImg sweat'
										src='/images/sweatIcon.svg'
										alt='tkd'
									/>
									<p className='classDesc'>Yotae will make you sweat! We may pay the bills with money but we stay open from sweat equity. You will find that Yotae gives you results equal to your effort. </p>
								</div>
							</Card>
						</Col>
					</div>
				</Row>
			</div>
		</YotaeWrapper>
	);
};
export default YotaeInfo;
