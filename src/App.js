import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error, Register, Landing, ProtectedRoute } from './pages/index.js';
import {
	SharedProjectLayout,
	AllProjects,
	AddProject,
	Profile,
	Stats,
} from './pages/projectsDashboard';

function App() {
	return (
		<Router>
			<Routes>
        <Route path='/' element={<ProtectedRoute><SharedProjectLayout /></ProtectedRoute>}>
          <Route index element={<Stats />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/add-project" element={<AddProject />}/>
          <Route path="/all-projects" element={<AllProjects />}/>
        </Route>
				<Route path='/register' element={<Register />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
