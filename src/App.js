import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/styles.scss'

import { Home, About } from './pages'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
