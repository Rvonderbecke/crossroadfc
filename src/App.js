import { Routes, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js'
import HomePage from './pages/HomePage.js';
import TkdInfo from './pages/TkdInfo.js';
import Login from './components/Login.js';
const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='tkd' element={<TkdInfo />} />
      </Route>
      </Routes>
      
  )
}
export default App;



