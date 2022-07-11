import { useEffect } from 'react';
import { useTkdContext } from '../../context/tkdContext';
import { useAppContext } from '../../context/appContext';
import InfoBox from '../../components/infoBox';
import Wrapper from '../../assets/wrappers/StatItem.js'
import tkdLogo from '../../assets/images/bow.png'
import bidLogo from '../../assets/images/change.png'
import tripLogo from '../../assets/images/explore.png'
import tkdIcon  from '../../assets/images/tkd.png'
import bidIcon  from '../../assets/images/bid.png'
const Stats = () => {
  const { user } = useAppContext();
 
	const { createTkdProfile, getUserProgramDetails, fullName, taekwondo, biddemo, trip} =
    useTkdContext();
  const { enrolled, currentRank } = taekwondo;
  
  useEffect(() => {
    try {
      getUserProgramDetails(user);

    } catch (error) {
      console.log(error.message) 
    }
	}, []);

	return (
    <Wrapper>
      {trip && <InfoBox info={trip} image={tripLogo} icon={tkdIcon}/>}
      {taekwondo && <InfoBox info={taekwondo} image={tkdLogo} icon={tkdIcon}/>}
      {biddemo && <InfoBox info={biddemo} image={bidLogo} icon={bidIcon}/>}
		</Wrapper>
	);
};
export default Stats;
