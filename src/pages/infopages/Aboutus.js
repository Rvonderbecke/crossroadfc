import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/appContext.js';
import { useNavigate, Link } from 'react-router-dom';

const Aboutinfo = () => {
	const { toggleSidebar } = useAppContext();
	const nav = useNavigate();

	const handleNav = () => {
		nav('/');
	};

	return (
		<Wrapper className='full-page'>
			<div>
				
				<div className='content'>
					<div className='bid-content infoBox'>
					<button type='button' className='close-btn' onClick={handleNav}>
					<FaTimes />
				</button>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
						tenetur at accusamus fugit expedita delectus sed illo rem nihil
						nemo, possimus inventore? Dolorem, magnam sed ipsum unde atque hic
						corporis?</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`

`
export default Aboutinfo;

