import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InfoBox = (props) => {
	const {
		enrolled,
		currentRank,
		title,
		startDate,
		location,
		rewardPointsTotal,
		bidPointTotal,
	} = props.info;
	const [flip, setFlip] = useState(true);
	const nav = useNavigate();

	const handleClick = (e) => {
		e.stopPropagation();
		
	}
	return (
		<Wrapper onClick={() => setFlip(!flip)}>
			{flip ? (
				<>
					<img src={props.image} alt={title} />
					<img src={props.icon} alt='' className='icon' />
					<p className='title'>{title}</p>
					<p className='enrolled'>
						{enrolled ? (
							'Enrolled !'
						) : (
							<button className='btn btnEnroll' type='button' onClick={handleClick}>
								Enroll
							</button>
						)}
					</p>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<img src={props.icon} alt='' className='icon reversed' />

					{currentRank && <p className='rank'>Current Rank: {currentRank}</p>}
					{bidPointTotal && <p className='points'>Total Bid Points: {bidPointTotal}</p>}
					{rewardPointsTotal && <p className='points'>Total Reward Points: {rewardPointsTotal}</p>}
					{startDate && `Member Since ${startDate}`}
					<button
						className='btn btnDash'
						type='button'
						onClick={() => nav(`/${location}`)}>{`${title} Dashboard`}</button>
				</>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-around; */
	border: 1px solid var(--grey-200);
	width: 18rem;
	margin-left: 2rem;
	border-radius: var(--borderRadius);
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	height: 25rem;
	font-family: var(--bodyFont);

	img {
		width: 100%;
		border-radius: var(--borderRadius);
	}
	.icon {
		border:0;
		outline: 0;
		height: 4.5rem;
		width: 4.5rem;
		transform: translate(7rem, -2.5rem);
		
	}
	.title {
		color: var(--primary-500);
		font-size: 1.5rem;
		font-weight: 700;
		transform: translateY(-4.5rem);
	}
	.btnEnroll {
		width: 90%;
		margin-left: 0.9rem;
		transform: translateY(-5rem);
	}

	h2 {
		font-family: var(--bodyFont);
		text-align: center;
		text-transform: uppercase;
		font-size: 1.75rem;
		font-weight: 700;
		padding-top: 1rem;
		color: var(--primary-500);
	}

	.reversed {
		text-align: center;
		margin-top: 2rem;
	}
	.rank, .points {
		color: var(--primary-500);
		text-align: center;
		margin: 0;
		padding: 0%;
		
	}
	.btnDash {
		margin-left: 1.75rem;
		margin-top: 6.5rem;
		width: 80%;
		height: 3rem;
	}
`;
export default InfoBox;
