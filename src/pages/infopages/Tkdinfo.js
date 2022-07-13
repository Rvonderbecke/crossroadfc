import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/appContext.js';
import { useNavigate, Link } from 'react-router-dom';

const Tkdinfo = () => {
	const { toggleSidebar } = useAppContext();
	const nav = useNavigate();

	const handleNav = () => {
		nav('/');
	};

	return (
		<Wrapper className='full-page'>
			<button type='button' className='close-btn btn' onClick={handleNav}>  
				<FaTimes />
			</button>
			<div>
				<div className='content'>
				<div className='tkd-content'>
				<h3>Behavioral Taekwondo Programs</h3>
				<div className='self-control'>
					<h2>Level 1-Self-Control</h2>
					<p>
						Self-Control and basic taekwondo principles are combined in this
						course along with foundational process teaching aimed at core
						principles of decision making and leadership skill development.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='white box'></div>
							<p>White Belt</p>
						</div>
						<div className='belt'>
							<div className='yellow box'></div>
							<p>Yellow Belt</p>
						</div>
						<div className='belt'>
							<div className='orange box'></div>
							<p>Orange Belt</p>
						</div>
					</div>
				</div>
				<div className='self-awareness'>
					<h2>Level 2-Self-Awareness</h2>
					<p>
						Self-Awareness and novice taekwondo principles are brought together
						with lessons that are designed to expand upon the processing skills
						introduced with self-control. These lessons are designed to increase
						ones awareness of the power they hold to influence their environment
						through self evident accomplishments while introducing steps of true
						confidence development.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='green box'></div>
							<p>Green Belt</p>
						</div>
						<div className='belt'>
							<div className='purple box'></div>
							<p>Purple Belt</p>
						</div>
						<div className='belt'>
							<div className='lightBlue box'></div>
							<p>Light Blue Belt</p>
						</div>
					</div>
				</div>
				<div className='strength'>
					<h2>Level 3-Strength of Character</h2>
					<p>
						Strength-of-Character and advanced taekwondo principles, standing on
						the principles established in the previous courses advanced
						practitioners start developing their own concrete sense of self.
						Introducing lessons to master over a life time, possessing the
						ability to lead with morally sound character and free from adverse
						influence that surrounds marks the traits of a student who has the
						endurance and commitment to complete this course.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='darkBlue box'></div>
							<p>Dark Blue Belt</p>
						</div>
						<div className='belt'>
							<div className='brown box'></div>
							<p>Brown Belt</p>
						</div>
						<div className='belt'>
							<div className='red box'></div>
							<p>Red Belt</p>
						</div>
					</div>
				</div>
				<div className='black-belt'>
					<h2>Black Belt Classes</h2>
					<p>
						Black Belt Classes are not for the faint of heart. Black belt
						classes are not for bragging rights but rather are designed to break
						down every detail and rebuild your skills to a new level that is
						only limited by ones own perception of what is possible. Completion
						of these classes earns you privileges only available to those who
						endure where others have failed.{' '}
					</p>
					<div className='belts'>
						<div className='belt'>
							<div className='deputy box'></div>
							<p>Deputy Black Belt</p>
						</div>
						<div className='belt'>
							<div className='black box'></div>
							<p>Black Belt</p>
						</div>
					</div>
				</div>
			</div>					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.content {
		overflow-y: auto;
		min-height: 100%;
		width: 100%;
        padding-bottom: 15rem;

            h3 {
                text-align: center;
                font-family: $font-primary-paragraph;
                text-transform: uppercase;
                font-size: 2rem;
            
            }
		.self-control,
		.self-awareness,
		.strength,
		.black-belt {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 3rem;
            height: 15rem;
			border-top: 2px solid $color-primary-blue;
			margin-top: 2rem;

			h2 {
				
				font-family: $font-primary-heading;
                font-weight: 500;
                font-size: 1.5rem;
             
			}
			// grid-template-rows: repeat(4,1fr);

			.belts {
				display: flex;
				flex-direction: column;
				width: 100%;
				.belt {
					padding-bottom: 0.5rem;
					display: flex;
					flex-direction: row;
					align-items: center;
					.box {
						width: 40%;
						height: 2rem;
					}
					p {
						margin: 0;
						margin-left: 1rem;
						font-family: $font-primary-paragraph;
	
						
					}
				}
			}
			.white {
                border: .05rem solid lightgray;
				background-color: white;
			}
			.yellow {
				background-color: $color-primary-yellow;
			}
			.orange {
				background-color: #FB4A08;
			}
			.green {
				background-color: $color-primary-green;
			}
			.purple {
				background-color: #741AA8;
			}
            .lightBlue {
				background-color: $color-primary-blue;
			}
			.darkBlue {
				background-color: #156577;
			}
			.brown {
				background-color: #8E4D0D;
			}
			.red {
				background-color: $color-primary-red;
			}
			.deputy {
				background-color: white;
                border: .05px solid lightgray;
                border-bottom: .8rem solid black;
                border-top: .8rem solid black;
                
               
			}
			.black {
				background-color: black;
                
			}
		}
		p {
			grid-column: 1;
			font-family: $font-primary-paragraph;
			font-size: 1.15rem;
			font-weight: 300;
            
		}
       
	}

`
export default Tkdinfo;
