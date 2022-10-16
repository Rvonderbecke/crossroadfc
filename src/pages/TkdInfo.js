import { useState } from 'react';
import Modal from 'react-modal';

import Card from '../components/Card';
import { TkdWrapper, Row, Col } from '../styles';


const TkdInfo = () => {
	const [openPop, setOpenPop] = useState({
		modal1: false,
		modal2: false,
	});
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
							<Card>
								<div className='cardContent'>
									<h3 className='tkdLevel'>Level 2</h3>
									<h2 className='classTitle'>Self-awareness</h2>
									<p className='classDesc'>
										Self-Awareness and novice taekwondo principles are brought
										together with lessons that are designed to expand upon the
										processing skills introduced with self-control.
										<button
											className='more'
											onClick={() => setOpenPop({modal1: !openPop.modal1})}>
											Read More...
										</button>
										{openPop && (
											<Modal
												ariaHideApp={false}
												parentSelector={() => document.querySelector('#modal')}
												onRequestClose={() => setOpenPop({modal1: !openPop.modal1})}
												shouldCloseOnOverlayClick={true}
												isOpen={openPop.modal1}
												
												className='Modal'
											>
												<p className='modalTxt'>
													These lessons are designed to increase ones awareness
													of the power they hold to their environment through
													self evident accomplishments while introducing steps
													of true confidence development.
												</p>
												<button onClick={() => setOpenPop({modal1: !openPop.modal1})}>X</button>
											</Modal>
										)}
									</p>

									<div className='firstBelt'>
										{' '}
										<div className='belt beltGreen'></div>
										<p className='beltTitle '>Green Belt</p>
									</div>
									<div className='secondBelt'>
										<div className='belt beltPurple'></div>
										<p className='beltTitle'>Purple Belt</p>
									</div>
									<div className='thirdBelt'>
										<div className='belt beltLtBlue'></div>
										<p className='beltTitle'>Light Blue Belt</p>
									</div>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h3 className='tkdLevel'>Level 3</h3>
									<h2 className='classTitle'>Strength of Character</h2>
									<p className='classDesc'>
										Strength-of-Character and advanced taekwondo principles,
										standing on the principles established in the previous
										courses advanced practitioners start developing their own
										concrete sense of self.
										<button
											className='more'
											onClick={() => setOpenPop({modal2: !openPop.modal2})}>
											Read More...
										</button>
										{openPop && (
											<Modal
												ariaHideApp={false}
												parentSelector={() => document.querySelector('#modal')}
												onRequestClose={() => setOpenPop({modal2: !openPop.modal2})}
												shouldCloseOnOverlayClick={true}
												isOpen={openPop.modal2}
												
												className='Modal'>
												<p>
													Introducing lessons to master over a life time,
													possessing the ability to lead with morally sound
													character and free from adverse influence that
													surrounds marks the traits of a student who has the
													endurance and commitment to complete this course.
												</p>
												<button onClick={() => setOpenPop({modal2: !openPop.modal2})}>X</button>
											</Modal>
										)}
									</p>
									<div className='firstBelt'>
										{' '}
										<div className='belt beltDarkBlue'></div>
										<p className='beltTitle '>Darkblue Belt</p>
									</div>
									<div className='secondBelt'>
										<div className='belt beltBrown'></div>
										<p className='beltTitle'>Brown Belt</p>
									</div>
									<div className='thirdBelt'>
										<div className='belt beltRed'></div>
										<p className='beltTitle'>Red Belt</p>
									</div>
								</div>
							</Card>
						</Col>
						<Col size={1}>
							<Card>
								<div className='cardContent'>
									<h3 className='tkdLevel'>Level 4</h3>
									<h2 className='classTitle'>Black-Belt</h2>
									<p className='classDesc'>
										Black Belt Classes are not for the faint of heart.Black belt
										classes are not for bragging rights but rather are designed
										to break down every detail and rebuild your skills to a new
										level that is only limited by ones own perception of what is
										possible Completion of these classes earns you privileges
										only available to those who endure where others have failed.
									</p>

									<div className='firstBelt'>
										{' '}
										<div className='belt beltDeputy'></div>
										<p className='beltTitle '>Deputy Belt</p>
									</div>
									<div className='secondBelt'>
										<div className='belt beltBlack'></div>
										<p className='beltTitle '>Black Belt</p>
									</div>
								</div>
							</Card>
						</Col>
					</div>
				</Row>
			</div>
		</TkdWrapper>
	);
};

Modal.defaultStyles.overlay.top = '200px';
Modal.defaultStyles.overlay.bottom = '200px';
Modal.defaultStyles.overlay.left = '50%';
Modal.defaultStyles.overlay.marginRight = 'auto';
Modal.defaultStyles.overlay.marginLeft = '35px';
Modal.defaultStyles.overlay.transform = 'translate(-50%, -0%)';
Modal.defaultStyles.overlay.padding = '20px';
Modal.defaultStyles.overlay.fontSize = '2rem';
Modal.defaultStyles.overlay.backgroundColor = 'white';
Modal.defaultStyles.overlay.borderRadius = '30px';


export default TkdInfo;
