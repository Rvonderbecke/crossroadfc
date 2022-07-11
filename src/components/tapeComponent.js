import styled from 'styled-components';

const TapeComponent = ({ color, name, complete, mainContent }) => {
	return (
		<Wrapper>
			<div className='header'>
				<div className={`${color} colorBox btn`}>{name}</div>
				<input 
					type='checkbox'
					name='complete'
					id='complete'
					checked={complete}
                />
                <label htmlFor="complete">Complete</label>
			</div>
			<div className="main-content">
				{mainContent}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
		
	.header {
		width: 61rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		label {
			margin: 3rem;
			font-family: var(--paragraphFont);
			font-size: 2rem;
			text-transform: uppercase;
		}
		input[type='checkbox'] {
			width: 1.5rem;
			height: 1.5rem;
			margin-left: 2rem;
		}
		
	.colorBox{
		width: 25rem;
		height: 5rem;
		text-align: center;
		text-transform: uppercase;
		font-family: var(--headingFont);
		font-size: 1.5rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2rem;
	}
	.yellow {
		background-color: #FBD008;
	}
	.green {
		background-color: #5EAB77;
	}
	.red {
		background-color: #D52A28;
	}
	.brown {
		background-color: #8E4D0D;
	}
	.blue {
		background-color: #219EBC;
	}}

	@media (max-width: 1025px) {
		.header {
			label {font-size:1.5rem;
			margin-right: 0;}
			
		}
		@media (max-width: 992px) {
		.header {
			.colorBox {
		 	width: 15rem;
			margin-left: 15rem;
		 	font-size: 1.25rem;
		 	height: 4rem;
		}}
			
		}
		@media (max-width: 529px) {
		.header {
			label {
				font-size:1.2rem;
				margin: .75rem;}
		.colorBox {
			margin-left: 16.5rem;
		}
		}
			
		}
	}
`;
export default TapeComponent;
