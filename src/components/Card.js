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
    height: 43em;
    width: 37em;
    border-radius: 30px;
		border: 1px solid lightgrey;

   .cardBody {
    display: flex;
   }
    .sideBar {
	  background-color: ${(props) => (!props.color ? '#219ebc' : `${props.color}`)};
      width: 6.5em; 
      height: 43em;
      border-radius: 30px 0 0 30px;
    }
	.cardContent {
        
		width: 25em;
    margin-left: 2em;
    

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
      width: 10em;
        }
        .classDesc {
          font-family:'cabin', serif;
          font-size: 1.5rem;
          line-height: 1.75rem;
          margin-bottom: 20%;
        
        }
        
        .firstBelt, .secondBelt, .thirdBelt{
           display: flex;
           justify-content: space-between;
                      
         }
   
          .belt {
            width: 13em;
            height: 3em;
            margin: .5em;
            
          
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

          .beltTitle {
            font-family: 'cabin', serif;
            font-size: 1.35rem;

           
           
          }
        }
        

	
`;
export default Card;
