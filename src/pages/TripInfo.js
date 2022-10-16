import { TripWrapper, Row, Col } from '../styles';
import Card from '../components/Card'


const TripInfo = () => {
  return (
    <TripWrapper>
    <div className='tripContainer'>
      <Row>
        <div className='banner'>
          <h3>
            What is <br></br>Trip Outreach?
          </h3>
          <p className='infoTxt'>
          TRIP Outreach teaches children the value of helping their community. They are 
encouraged to volunteer their time and energy to help those that are in need 
while earning points that they can spend in the TRIP Catalog. This program also 
teaches children important lessons about self-control and working together 
while having lots of fun! All kids ages 5 to 18 are welcome.
          </p>
          <button className='infoBtn'>
            Sign <br></br> up
          </button>
        </div>
      </Row>
      <Row>
        <div className='cardContainerTrip'>
          <Col size={1}>
            <Card color='#FBD008'>
            <div className='cardContent'>
									
									<h2 className='classTitle'>Learn<br></br>Taekwondo</h2>
									<p className='classDesc'>
                  Taekwondo is a part of the TRIP 
Program. The kids will learn the 
basic fundamentals and get 
some exercise. 
                  </p>
                  <img className='tripImg yellow' src='/images/logoCR.svg' alt="tkd" />
                  </div>
            </Card>
          </Col>
         
          <Col size={1}>
              <Card color='#EB5050'>
              <div className='cardContent'>
									
									<h2 className='classTitle'>Have Fun</h2>
									<p className='classDesc'>
                  Having fun is an important part of 
the TRIP Outreach program. You 
are only a kid once so we make 
sure there is plenty of time to 
play games.
                  </p>
                  <img className='tripImg green' src='/images/logoCR.svg' alt="tkd" />
                  </div>
              
            </Card>
          </Col>
          <Col size={1}>
            <Card color='#5EAB77'>
            <div className='cardContent'>
									
									<h2 className='classTitle'>Go<br></br>Exploring</h2>
									<p className='classDesc'>
                  Go on fun field trips!  Kids can earn trips as well as points for their volunteer work and maintaining good grades in school. 
                  </p>
                  <img className='tripImg coral' src='/images/logoCR.svg' alt="tkd" />
                  </div>
            </Card>
            </Col>
            <Col size={1}>
              <Card>
              <div className='cardContent'>
									
									<h2 className='classTitle'>Give Back</h2>
									<p className='classDesc'>
                  Giving back is a big part of what 
TRIP Outreach is all about. Not 
only does it bring the community 
together and help individuals that 
need it, it also teaches kids to 
value others as well as 
themselves. 
                  </p>
                  <img className='tripImg ' src='/images/logoCR.svg' alt="tkd" />
                  </div>
              
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  </TripWrapper>

  )
}
export default TripInfo