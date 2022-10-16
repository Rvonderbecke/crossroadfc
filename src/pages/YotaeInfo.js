import { Row, Col, YotaeWrapper } from '../styles';
import Card from '../components/Card'

const YotaeInfo = () => {
    return (
        <YotaeWrapper>
        <div className='yotaeContainer'>
          <Row>
            <div className='banner'>
              <h3>
                What is <br></br>Yotae?
              </h3>
              <p className='infoTxt'>
              Yotae is a mixture of the high-intensity of taekwondo and the stretching and 
strength of yoga. Mixing these two disciplines together gives you the best of both 
worlds. 
              </p>
              <button className='infoBtn'>
                Sign <br></br> up
              </button>
            </div>
          </Row>
          <Row>
            <div className='cardContainerYotae'>
              <Col size={1}>
                <Card color='#FBD008'>
                <div className='cardContent'>
									
									<h2 className='classTitle'>Body</h2>
                  <img className='yotaeImg body' src='/images/bodyIcon.svg' alt="tkd" />
									<p className='classDesc'>
                  Enhance your body and feel 
good about the way you look.
                  </p>
                  </div>
                </Card>
              </Col>
              <Col size={1}>
                <Card color='#EB5050'>
                <div className='cardContent'>
									
									<h2 className='classTitle'>Spirit</h2>
                  <img className='yotaeImg spirit' src='/images/spiritIcon.svg' alt="tkd" />
									<p className='classDesc'>
                  Enhancing the body and mind will enhance the spirit and bring you inner peace.
                  </p>
                  </div>
                </Card>
              </Col>
              <Col size={1}>
                <Card color='#5EAB77'>
                <div className='cardContent'>
									
									<h2 className='classTitle'>Mind</h2>
                  <img className='yotaeImg mind' src='/images/mindIcon.svg' alt="tkd" />
									<p className='classDesc'>
                  Enhance your mind and feel clarity throughout your day.
                  </p>
                  </div>
                </Card>
                </Col>
                <Col size={1}>
                  <Card>
                  <div className='cardContent'>
									
									<h2 className='classTitle'>Sweat</h2>
                  <img className='yotaeImg sweat' src='/images/sweatIcon.svg' alt="tkd" />
									<p className='classDesc'>
                  Yotae will make you sweat!
                  </p>
                  </div>
                </Card>
              </Col>
            </div>
          </Row>
        </div>
      </YotaeWrapper>
    
      )
    }
export default YotaeInfo