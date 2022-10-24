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
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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

	.beltGroup {
		display: flex;
		flex-direction: column;
		
		
	}

		.firstBelt,
		.secondBelt,
		.thirdBelt {
			display: flex;
			flex-direction: row;
			align-self: flex-start;
			
		
			
      
      
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
    
		}
		.beltGreen {
			background-color: var(--beltgreen);
		}
		.beltPurple {
			background-color: var(--beltpurple);
		}

		.beltLtBlue {
			background-color: var(--beltlightblue);
      

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
			font-size: 1.45rem;
			margin-left: .25em;
      
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
