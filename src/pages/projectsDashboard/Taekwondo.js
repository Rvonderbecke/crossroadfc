import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useTkdContext } from '../../context/tkdContext';
import { ReactComponent as StatusBar } from '../../assets/images/beltStatus.svg';
import TapeComponent from '../../components/tapeComponent.js';
import tkdIcon from '../../assets/images/tkd.png';

const Taekwondo = () => {
	const [showPage, setShowPage] = useState(true);
	const {
		createTkdProfile,
		getUserProgramDetails,
		fullName,
		taekwondo,
		biddemo,
		trip,
	} = useTkdContext();
	return (
		<Wrapper className='container'>
			<div className='toggleName' onClick={() => setShowPage(!showPage)}>
				<div className='tkd '>
					<button
						type='button'
						className={showPage ? 'activeBtn' : 'notActiveBtn'}>
						Taekwondo
					</button>
				</div>
				<div className='trip '>
					<button
						type='button'
						className={!showPage ? 'activeBtn' : 'notActiveBtn'}>
						Trip Outreach
					</button>
				</div>
			</div>
			{showPage ? (
				<>
					<div className='tape-container'>
						<p>Current belt Level: {taekwondo.currentRank}</p>
						<div className='tapes'>
							<div className='yellow tkdBtn'>Yellow Tape</div>
							<div className='green tkdBtn'>Green Tape</div>
							<div className='Red tkdBtn'>Red Tape</div>
							<div className='brown tkdBtn'>brown Tape</div>
							<div className='blue tkdBtn'>blue Tape</div>
							<div className='quote tkdBtn'>
								"It does not matter how slowly you go as long as you do not
								stop" ~Confucius
							</div>
						</div>
					</div>
					<span>
						<img src={tkdIcon} alt='' />
					</span>
						<StatusBar className='progressBar' />
					
					<TapeComponent color='yellow' name='Yellow Tape' />
				</>
			) : (
				<>
					<div className='trip'>Coming soon!</div>
				</>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	.toggleName {
		display: Flex;
		align-self: center;
		justify-content: center;
		border: 2px solid #e2f9ff;
		border-radius: 20px;
		width: 50rem;
		height: 3rem;
    margin-top: 2rem;
    margin-left: 2rem;

		.activeBtn {
			border: none;
			color: var(--primary-500);
			text-transform: uppercase;
			background-color: #e2f9ff;
			border-radius: 20rem;
			width: 25rem;
			text-align: center;
			height: 100%;
		}
		.notActiveBtn {
			border: none;
			color: #b3dce1;
			text-transform: uppercase;
			background: none;
			width: 25rem;
			border-radius: 20rem;
			text-align: center;
			height: 100%;
		}
	}
.tape-container{
  p {
    text-transform: uppercase;
    font-size: 1.25rem;
    margin: 3rem;

  }
}
	.tkdBtn {
		height: 5rem;
		border-radius: 5px;
		width: 25rem;
		color: white;
		text-align: center;
		text-transform: uppercase;
		font-family: var(--headingFont);
		font-size: 1.5rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tapes {
		display: grid;
		grid-template-columns: repeat(2, 25rem);
		grid-template-rows: repeat(3, 5rem);
		grid-column-gap: 6.2rem;
		grid-row-gap: 3rem;
		margin: 0 0 5rem 3rem;

		.yellow {
			background-color: #fbd008;
		}
		.green {
			background-color: #5eab77;
		}
		.Red {
			background-color: #d52a28;
		}
		.brown {
			background-color: #8e4d0d;
		}
		.blue {
			background-color: var(--primary-500);
		}
		.quote {
			color: black;
			font-size: 1.15rem;
			font-family: var(--paragraphFont);
			font-weight: 500;
		}
	}
  .progressBar {
     box-shadow: var(--shadow-1);
     border: 1px solid lightgray;
     border-radius: 5px;
  }
	.container {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.container::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

  @media (max-width: 1479px) {
    .progressBar {
      width: 60rem;
    }}
  @media (max-width: 1367px) {
    .progressBar {
      width: 2rem;
    }
    .tapes {
      margin-right: 20rem;
    }
    .toggleName{
      margin-right: 16rem;
    }

  @media (max-width: 1231px) {
    .tapes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: .5rem;}}
    
    @media (max-width: 1109px) {
      .toggleName {
        width: 30rem;
       
      .activeBtn {
        width: 15rem;
      }
      .notActiveBtn {
        width: 15rem;
      }}
    }
    @media (max-width: 992px) {
      .tapes {
        margin-right: 0;
      }
      .toggleName {
        margin-right: 0;
      }

    }
    @media (max-width: 536px) {
      .toggleName {
        width: 20rem;

        .activeBtn {
        width: 10rem;
      }
      .notActiveBtn {
        width: 10rem;
      }
      }
    }
    }
`;
export default Taekwondo;
