import styled from 'styled-components';

const InfoBoxWithPicture = ({ item }) => {
	const { bigImgSrc, littleImgSrc, headingText, paragraphText } = item;
	return (
		<Wrapper className='info-box-container'>
			<div className='bigImage'>
				<img src={`${bigImgSrc}`} alt={`${headingText}`} />
			</div>
			<div className='additionalContent'>
				<h2>{`${headingText}`}</h2>
				<img src={`${littleImgSrc}`} alt={`${headingText}`} />
				<p>{`${paragraphText}`}</p>  
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`


.bigImage {
	img{
		width: 20rem;
	}
}
.additionalContent{
	img{
		width: 3rem;
	}
}

`
export default InfoBoxWithPicture;



