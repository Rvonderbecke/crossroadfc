import styled from 'styled-components';
const Card = ({ children, korean, color }) => {
	return (
		<CardWrapper color={color}>
			<div className='cardBody'>
				<div className='sideBar'>
					{korean && <div className='korenText'>{korean}</div>}
				</div>
				{children}
			</div>
		</CardWrapper>
	);
};
const CardWrapper = styled.div`
	margin: 2em;
	height: 47.5em;
	width: 37em;
	border-radius: 30px;
	border: 1px solid lightgrey;
	box-shadow: 5px 10px #888888;

	.cardBody {
		display: flex;
    
	}
	.sideBar {
		background-color: ${(props) =>
			!props.color ? '#219ebc' : `${props.color}`};
		width: 6.5em;
		height: 47.5em;
		border-radius: 30px 0 0 30px;
	}

	.cardContent {
		width: 25em;
		margin-left: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	align-items: center;
	
	
    

		.tkdLevel {
			font-family: 'cabin', serif;
			font-size: 2.5rem;
			color: var(--blue);
			border-bottom: 2px solid var(--blue);
			width: 10em;
		
   
		}

		.classTitle {
			font-family: 'cabin', serif;
			font-size: 3rem;
			font-weight: 600;
			text-transform: uppercase;
			
			
			
		}
		.classDesc {
			font-family: 'cabin', serif;
			font-size: 1.5rem;
			line-height: 1.75rem;
			
		}
    .more {
      background-color: transparent;
      border: none;
      color: var(--blue);
      font-size: 1.5rem;
      font-weight: 600;
    }
    .more:hover {
      cursor: pointer;
    }

		.firstBelt,
		.secondBelt,
		.thirdBelt {
			display: flex;
			justify-content: space-between;
			
      
      
		}

		.belt {
			width: 13em;
			height: 3em;
			margin: 0.25em;
      
      
		}
		.beltWhite {
			border: 1px solid lightgray;
		}
		.beltYellow {
			background-color: var(--beltyellow);
		}

		.beltOrange {
			background-color: var(--beltorange);
      margin-bottom: 2em;
		}
		.beltGreen {
			background-color: var(--beltgreen);
		}
		.beltPurple {
			background-color: var(--beltpurple);
		}

		.beltLtBlue {
			background-color: var(--beltlightblue);
      margin-bottom: 2em;

		}
		.beltDarkBlue {
			background-color: var(--beltdarkblue);
		}
		.beltBrown {
			background-color: var(--beltbrown);
		}

		.beltRed {
			background-color: var(--beltred);
      margin-bottom: 2em;

		}
		.beltDeputy {
			padding: 0%;
			background-color: white;
			border: 3px solid lightgray;
			border-bottom: 1rem solid black;
			border-top: 1rem solid black;
			box-sizing: border-box;
		}

		.beltBlack {
			background-color: black;
      margin-bottom: 2em;

		}

		.beltTitle {
			font-family: 'cabin', serif;
			font-size: 1.35rem;
      
		}
	}

	/* TRIP OUTREACH */


.tripImg {
	height: 22em;
	width: 30.4em;
	border-radius: 0 0 30px 0;
	
}
.yellow {
	border-top: 5px solid var(--yellow);
}

.coral {
	border-top: 5px solid var(--coral);
}
.green {
	border-top: 5px solid var(--green);
}
.blue {
	border-top: 5px solid var(--blue);
}

/* YOTAE */
.yotaeImg {
	
}

.body {
	height: 25em;
}
.spirit {
	height: 13em;
}
.mind {
height: 10em;
}
.sweat {
height: 13em;
}

/* ABOUT */




`;
export default Card;
