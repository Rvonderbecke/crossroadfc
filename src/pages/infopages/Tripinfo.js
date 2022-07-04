import Wrapper from '../../assets/wrappers/Tkdinfo.js';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../../context/appContext.js';
import { useNavigate, Link } from 'react-router-dom';

const Tripinfo = () => {
	const { toggleSidebar } = useAppContext();
	const nav = useNavigate();

	const handleNav = () => {
		nav('/');
	};

	return (
		<Wrapper className='full-page'>
			<div>
				<button type='button' className='close-btn' onClick={handleNav}>
					<FaTimes />
				</button>
				<div className='content'>
					<div className='trip-content'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
						tenetur at accusamus fugit expedita delectus sed illo rem nihil
						nemo, possimus inventore? Dolorem, magnam sed ipsum unde atque hic
						corporis?
					</div>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};
export default Tripinfo;
