
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import HomePage from './pages/HomePage';
import TkdInfo from './pages/TkdInfo';
import TripInfo from './pages/TripInfo';
import AboutUs from './pages/AboutUs';
import Behavioral from './pages/Behavioral';
import YotaeInfo from './pages/YotaeInfo';
import Login from './components/Login';
const App = () => {
	return (
		<>
		<Routes >
			<Route path='/' element={<LandingPage />}>
				<Route index element={<HomePage />} />
				<Route path='tkd' element={<TkdInfo />} />
				<Route path='trip' element={<TripInfo />} />
				<Route path='yotae' element={<YotaeInfo />} />
				<Route path='aba' element={<Behavioral />} />
				<Route path='aboutus' element={<AboutUs />} />
				<Route path='login' element={<Login />} />
			</Route>
			</Routes>
			</>
	);
};
export default App;
