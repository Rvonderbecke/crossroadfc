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
									
									<h2 className='classTitle'>Self-Control</h2>
									<p className='classDesc'>
										Self-Control and basic taekwondo principles are combined in
										this course along with foundational process teaching aimed
										at core principles of decision making and leadership skill
										development.
                  </p>
                  <img src='/images/tkdImg.jpg' alt="tkd" />
                  </div>
            </Card>
          </Col>
          <Col size={1}>
            <Card color='#EB5050'>
              
            </Card>
          </Col>
          <Col size={1}>
            <Card color='#5EAB77'>
              
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  </TripWrapper>

  )
}
export default TripInfo