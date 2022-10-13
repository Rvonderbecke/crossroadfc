import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js'
import HomePage from './pages/HomePage.js';
import Login from './components/Login.js';
const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
      </Route>
      </Routes>
      
  )
}
export default App;



