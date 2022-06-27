import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Logo } from '../components';
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container'>
				<div className='info'>
					<h1>Crossroad Family Center</h1>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
		.logo {
			width: 3rem;
		}
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
`;

export default Landing;
