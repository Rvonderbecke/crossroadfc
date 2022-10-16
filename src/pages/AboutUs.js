import { Row, Col, AboutUsWrapper } from '../styles';
import Card from '../components/Card';

const AboutUs = () => {
	return (
		<AboutUsWrapper>
			<div className='aboutContainer'>
				<Row>
					<div className='banner'>
						<h3>
							Contact Us
						</h3>
						<p className='infoTxt'>132 North Main Street Aurelia, IA 51005</p>
						<div className='hours'>Monday-Friday 3pm to 7pm< br/> Phone: 712-295-2103<br/>admin@crossroadfc.com</div>
					</div>
				</Row>
				<Row>
					<div className='cardContainerAbout'>
						<Col size={1}>
							<Card color='#FBD008'>
								<div className='cardContent'>
									<h2 className='classTitle'>Who We Are</h2>

									<p className='aboutDesc'>
										When a motivational teaching style is combined with
										generational martial arts knowledge, and modeled with modern
										behavioral science. You start to paint a picture of who we
										are and the potential our lessons will reveal in your lives.
										We are dedicated to community betterment, using its
										strongest and least utilized resource, its citizens.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#EB5050'>
								<div className='cardContent'>
									<h2 className='classTitle'>What We Do</h2>

									<p className='aboutDesc'>
										Trip Outreach was introduced in 2004 as a program to teach
										responsibility and promote community engagement. From that
										day it has evolved into a program that does its intended
										purpose and so much more. From students’ ability to earn
										rewards that can cover school expenses to utility bills for
										your home TRIP rewards help the entire family succeed.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#5EAB77'>
								<div className='cardContent'>
									<h2 className='classTitle'>Donate</h2>
									<p className='aboutDesc'>
										Donated funds are used to support the ongoing operations of
										the Von Der Becke Academy Corp. You as our generous
										supporters have a right to know where every dollar is spent.
										Contact us and learn how you can bid to full fill your
										intended purpose. All Donations support our student body and
										the needs of the communities we serve.
									</p>
									<div className='donateBtn'>
										<img
											className='donateIcon'
											src='/images/donateIcon.svg'
											alt='tkd'
                    />
                    <a href="https://pay.crossroadfc.com" target='_blank' rel="noreferrer" >
                      <button className='linkBtn'> Donate Now</button>
                      </a>
									</div>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h2 className='classTitle'>Contact Us</h2>
									
									<p className='aboutDesc'>
										Please submit any questions, concerns, or recommendations
										below and someone will get back to you shortly.
									</p>
									<div className='emailBtn'>
										<img
											className='emailIcon'
											src='/images/emailIcon.svg'
											alt='tkd'
										/>
										<button className='linkBtn'> Send Us an Email</button>
									</div>
										
								</div>
							</Card>
						</Col>
					</div>
				</Row>
			</div>
		</AboutUsWrapper>
	);
};
export default AboutUs;
