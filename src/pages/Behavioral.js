import { Row, Col, BehavioralWrapper } from '../styles';
import Card from '../components/Card';
const Behavioral = () => {
	return (
		<BehavioralWrapper>
			<div className='BehavioralContainer'>
				<Row>
					<div className='banner'>
						<h3>
							What is <br></br>ABA Therapy?
						</h3>
						<p className='infoTxt'>
							ABA uses evidence-based practices to increase socially significant
							behavior while reducing unwanted challeneging behaviors giving
							the client and their family the best life possible.
						</p>
						<button className='infoBtn'>
							Enroll
						</button>
					</div>
				</Row>
				<Row>
					<div className='cardContainerBehav'>
						<Col size={1}>
							<Card color='#FBD008'>
								<div className='cardContent'>
									<h2 className='classTitle'>Individualized Treatment Plans</h2>

									<p className='behavDesc'>
										Individualized treatment plans are created to meet the
										specific needs of each child. Each plan is developed with
										the individual goals for that child and their family. We
										actively include family members in the planning and delivery
										of all services provided. We provide collaborative ABA
										therapy that focuses on support and guidance for all members
										of the family.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#EB5050'>
								<div className='cardContent'>
									<h2 className='classTitle'>Location of ABA Services</h2>

									<p className='behavDesc'>
										The location of ABA services can impede or support a child’s
										growth. Assessment, data collection, and observation
										determine the location of services. For your convenience we
										provide ABA services for clients of different ages and
										symptoms, in various settings. Some of these locations can
										include: home-based, center-based, school- based and virtual
										therapy.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card color='#5EAB77'>
								<div className='cardContent'>
									<h2 className='classTitle'>Treatment of ASD</h2>
									<p className='behavDesc'>
										There is currently no cure for Autism Spectrum Disorder
										(ASD), however research shows that early intervention
										treatment can significantly reduce symptoms and improve
										functional skills. According to the American Academy of
										Pediatrics and the National Research Council, behavioral and
										communication interventions have been shown to be effective
										in the treatment of young children with ASD.
									</p>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h2 className='classTitle'>Take the First Step</h2>

									<p className='behavDesc'>
										ABA Therapy is a safe and proven therapy that is developed
										and implemented by highly skilled and qualified staff.
										Progress and results are continually being tracked, recorded
										and analyzed by the team, so any necessary changes can be
										made to ensure the best results are achieved for each child.
										If you think ABA Therapy may be best for your child Sign Up
										today and take the first step towards a better tomorrow.
									</p>
								</div>
							</Card>
						</Col>
					</div>
				</Row>
			</div>
		</BehavioralWrapper>
	);
};
export default Behavioral;
