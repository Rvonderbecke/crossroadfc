import Card from '../components/Card';
import { TkdWrapper, Row, Col } from '../styles';
const TkdInfo = () => {
	return (
		<TkdWrapper>
			<div className='tkdContainer'>
				<Row>
					<div className='banner'>
						<h3>
							What is <br></br>Taekwondo?
						</h3>
						<p className='infoTxt'>
							Tae means kick, Kwon means punch, and do means the art of. Our
							program uses these techniques to teach discipline, self-control,
							and focus of the body and mind. To learn more view our programs
							below.
						</p>
						<button className='infoBtn'>
							Sign <br></br> up
						</button>
					</div>
				</Row>
				<Row>
					<div className='cardContainerTkd'>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h3 className='tkdLevel'>Level 1</h3>
									<h2 className='classTitle'>Self-Control</h2>
									<p className='classDesc'>
										Self-Control and basic taekwondo principles are combined in
										this course along with foundational process teaching aimed
										at core principles of decision making and leadership skill
										development.
									</p>

									<div className='firstBelt'>
										{' '}
										<div className='belt beltWhite'></div>
										<p className='beltTitle '>White Belt</p>
									</div>
									<div className='secondBelt'>
										<div className='belt beltYellow'></div>
										<p className='beltTitle'>Yellow Belt</p>
									</div>
									<div className='thirdBelt'>
										<div className='belt beltOrange'></div>
										<p className='beltTitle'>Orange Belt</p>
									</div>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card><div className='cardContent'>
									<h3 className='tkdLevel'>Level 2</h3>
									<h2 className='classTitle'>Self-awareness</h2>
									<p className='classDesc'>
										Self-Control and basic taekwondo principles are combined in
										this course along with foundational process teaching aimed
										at core principles of decision making and leadership skill
										development.
									</p>

									<div className='firstBelt'>
										{' '}
										<div className='belt beltWhite'></div>
										<p className='beltTitle '>White Belt</p>
									</div>
									<div className='secondBelt'>
										<div className='belt beltYellow'></div>
										<p className='beltTitle'>Yellow Belt</p>
									</div>
									<div className='thirdBelt'>
										<div className='belt beltOrange'></div>
										<p className='beltTitle'>Orange Belt</p>
									</div>
								</div></Card>
						</Col>
						<Col size={1}>
							<Card></Card>
						</Col>
						<Col size={1}>
							<Card></Card>
						</Col>
					</div>
				</Row>
			</div>
		</TkdWrapper>
	);
};
export default TkdInfo;
