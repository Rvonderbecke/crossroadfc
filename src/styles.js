import styled from 'styled-components';

export const Grid = styled.div``;

export const Row = styled.div`

`;

const media = {
	xs: (styles) => `
    @media only screen and (max-width: 480px){
        ${styles}
    }
`,
};

export const Col = styled.div`

	flex: ${(props) => props.size};
	${(props) => props.collapse && media[props.collapse](`display: none;`)};
`;

export const LandingPageWrapper = styled.header`

	.headerContainer {
		padding: 0 2rem;
		border-top: 20px solid var(--blue);
		border-bottom: 4px solid var(--blue);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logoContainer {
		display: flex;

		img {
			height: 140px;
			margin-right: 2em;
		}
	}
	.headerBtn {
		justify-self: center;
	}

	.footerContainer {
		
		display: flex;
		background-color: var(--blue);
	}

	.footerNavLink {
		margin: 3em 0 0 5em;
		a {
			padding: 1rem;
			text-decoration: none;
			color: white;
			font-family: 'cinzel', serif;
			font-size: 1.5rem;
			font-weight: 500;
		}
	}
	.footerCenter {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			height: 55px;
		}
		p {
			font-family: 'cinzel', serif;
			font-size: 1.25rem;
			font-weight: 500;
			color: white;
		}
	}
	.footerRight {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 1em;
		margin-left: 15em;

		p {
			font-family: 'cabin', sans-serif;
			font-size: 2rem;
			color: white;
			margin-left: 2.5em;
		}

		.subscribeElement {
			display: flex;
			margin-left: 5em;

			input {
				width: 20em;
				height: 2em;
				border-radius: 5px 0 0 5px;
				border: none;
				text-align: center;
			}
			.subscribeBtn {
				background-color: var(--darkBlue);
				border: none;
				color: white;
				font-size: 1.5rem;
				padding: 0 1em;
				border-radius: 0 5px 5px 0;
			}
		}
	}
`;
export const HomePageWrapper = styled.div`
	.homePageContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		

		
		img {
			margin-top: 4em;
			height: 35em;
			width: 150em;
			border-radius: 10px 10px 0 0;
			z-index: -1;
			
		}
		p {
			
			font-family: 'cabin', sans-serif;
			font-size: 2.5rem;
			text-align: center;
		}
	}
	.homeLinks {
		margin-bottom: 3em;
		.homeBtnTkd {
			background-color: var(--yellow);
			height: ;
		}
		.homeBtnTrip {
			background-color: var(--blue);
		}

		.homeBtnYotae {
			background-color: var(--coral);
		}
		.homeBtnBehav {
			background-color: var(--green);
		}
		.homeBtnAbout {
			background-color: var(--lightBlue);
		}
	}
	.dots {
		display: flex;
		justify-content: center;
		background-color: var(--darkBlue);
		height: 3rem;
		border-radius: 0 0 10px 10px;
		margin-bottom: 1em;
	}
	.dot {
		align-self: center;
		margin-left: 0.5rem;
		height: 1rem;
		width: 1rem;
		padding: 0.75rem;
		border-radius: 100px;
		background-color: ${(props) => (props.active ? 'white' : '#219ebc')};
	}
	.active {
		background-color: white;
	}
`;

export const TkdWrapper = styled.div`


 

 .cardContainerTkd {
	
	display: flex;

	
 }
 

.Modal{
	background-color: red;
		font-size: 30rem;

	
}

`;

export const TripWrapper = styled.div`
.cardContainerTrip {
	display: flex;
}
.infoTxt {
	font-size: 2rem;
}
`;