
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import HomePage from './pages/HomePage';
import TkdInfo from './pages/TkdInfo';
import TripInfo from './pages/TripInfo';
import Login from './components/Login';
const App = () => {
	return (
		<>
		<Routes >
			<Route path='/' element={<LandingPage />}>
				<Route index element={<HomePage />} />
				<Route path='tkd' element={<TkdInfo />} />
				<Route path='trip' element={<TripInfo />} />
				<Route path='login' element={<Login />} />
			</Route>
			</Routes>
			</>
	);
};
export default App;
