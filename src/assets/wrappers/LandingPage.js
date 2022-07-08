import styled from 'styled-components'

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EEF2F3;
    /* background: var(--grey-50); */
    
    
    
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    
     }
  
     .landingContainer {
      border: 1px solid var(--grey-200);
      border-top: 5px solid #219EBC;
      background-color: white;
      width: 60rem;
      height: 30rem;
      border-radius: var(--borderRadius);
      text-align: center;
      box-shadow: var(--shadow-4);
      
     }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    border-bottom:1px solid var(--grey-200);
    color: #323D40;
  
  }
  .logo2 {
    height: 6rem;
    transform: translatey(-1rem);

  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    padding-left: 1rem;
    color: #323D40;
    span {
      color: var(--primary-500);
     
    }
  }

  .btn {
    margin: 3rem 0 5rem 0;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
    text-align: center;
    max-width: 60rem;
    color: #323D40;
  }
  .main-img {
    display: none;
  }

.landing-links {
 margin: 3rem 0 5rem 0;
 text-decoration: none;
 

  .nav-link{
    color: #323D40;
    padding-left: 1rem;
    margin: 1rem;
   
    
  }
    
}
.icon {
  margin-right: .2rem;
  color: #07292D
  
}

.tkdGuy {
  height: 1.5rem;
  
}




  @media (max-width: 992px) {
  .landing-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: .5rem;

    .nav-link{
      width:30rem;
    }
   }
    .landingContainer {
      height:100%;
      width: 100%;
      margin-bottom: 0;
     
    header h2 {
    display: none;
    }
    
    p{
     margin: 0;
     padding: 0 2rem 0 2rem;
    }}
  }


`
export default Wrapper
