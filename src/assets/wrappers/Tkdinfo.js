import styled from 'styled-components';



const Wrapper = styled.section`
display: flex;
align-items: flex-start ;
justify-content: center;
width: 90%;
margin: 3rem 0 3rem 6.5rem;
border:1px solid var(--grey-200);
border-radius: var(--borderRadius);
box-shadow: var(--shadow-2);
color: #323D40;
/* background-color: #EEF2F3; */

 
.tkd-content {
		overflow-y: auto;
		min-height: 100%;
		width: 100%;
        

            h3 {
                text-align: center;
                font-family: $font-primary-paragraph;
                text-transform: uppercase;
                font-size: 2rem;
                margin-top: 3rem;
            
            }
		.self-control,
		.self-awareness,
		.strength,
		.black-belt {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 3rem;
            height: 15rem;
			border-top: 1px solid var(--grey-200);;
			margin-top: 2rem;

			h2 {
				
				font-family: $font-primary-heading;
                font-weight: 500;
                font-size: 1.5rem;
             
			}
			// grid-template-rows: repeat(4,1fr);

			.belts {
				display: flex;
				flex-direction: column;
				width: 100%;
				.belt {
					padding-bottom: 0.5rem;
					display: flex;
					flex-direction: row;
					align-items: center;
					.box {
						width: 40%;
						height: 2rem;
					}
					p {
						margin: 0;
						margin-left: 1rem;
						font-family: $font-primary-paragraph;
	
						
					}
				}
			}
			.white {
                border: .05rem solid lightgray;
				background-color: white;
			}
			.yellow {
				background-color: #FBD008;
			}
			.orange {
				background-color: #FB4A08;
			}
			.green {
				background-color: #5EAB77;
			}
			.purple {
				background-color: #741AA8;
			}
            .lightBlue {
				background-color: #219EBC;
			}
			.darkBlue {
				background-color: #156577;
			}
			.brown {
				background-color: #8E4D0D;
			}
			.red {
				background-color: #D52A28;
			}
			.deputy {
				background-color: white;
                border: 5px solid darkgray;
                border-bottom: .8rem solid black;
                border-top: .8rem solid black;
                
               
			}
			.black {
				background-color: black;
                
			}
		}
		p {
			grid-column: 1;
			font-family: $font-primary-paragraph;
			font-size: 1.15rem;
			font-weight: 300;
            
		}
       
	}

.close-btn {
 transform: translateX(98.5rem);
 margin-top: 1rem;
 height: 2.75rem;
 width: 2.5rem;
 font-size: 1.5rem;
 padding: .4rem .25rem .25rem .25rem;

}
.btn-hero {
margin: 2rem 0 5rem 0;
}



`

export default Wrapper;