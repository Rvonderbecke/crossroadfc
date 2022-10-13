import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';
  
export default function SocialFollow() {
    return (
      <Wrapper>
    <div className="social-container">
          <a href="https://www.facebook.com/crossroadfc/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      {/* <a href="https://www.twitter.com/Rvonderbecke" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a> */}
      <a href="https://www.instagram.com/rvonderbecke/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="https://www.youtube.com/channel/UCQIwxHdq4M5JBrXRqK6qzYw"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
            </div>
            </Wrapper>
  );
}
const Wrapper = styled.div`

.social-container {
  margin: 5em 0 0 5em;
  height: 35px;
  
  
  
}
a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}
a.social:hover {
  transform: translateY(-2px);
}
a.youtube {
  color: white;
  
}

a.facebook {
  color: white;
}

a.twitter {
  color: white;
}

a.instagram {
  color: white ;
}
`