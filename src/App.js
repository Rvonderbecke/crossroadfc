import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error, Register, Landing, ProtectedRoute } from './pages/index.js';
import {
	SharedProjectLayout,
	Profile,
	Stats,
	Taekwondo,
	BidDemo
} from './pages/projectsDashboard';
import { TkdProvider } from './context/tkdContext.js';
import { Tkdinfo, Tripinfo, Bidinfo, Aboutinfo} from './pages/infopages'

function App() {
	return (
		<TkdProvider>
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedProjectLayout />
						</ProtectedRoute>
					}>
					
					<Route index element={<Stats />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/taekwondo' element={<Taekwondo />} />
					<Route path='/biddemocracy' element={<BidDemo />} />
					
				</Route>
				<Route path='/register' element={<Register />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='/tkdinfo' element={<Tkdinfo />} />
				<Route path='/tripinfo' element={<Tripinfo />} />
				<Route path='/bidinfo' element={<Bidinfo />} />
				<Route path='/aboutus' element={<Aboutinfo />} />
				
				<Route path='*' element={<Error />} />
			</Routes>
			</Router>
			</TkdProvider>
	);
}

export default App;
