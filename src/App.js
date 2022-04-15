import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, About, Gallery } from './pages'
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home title="Home"/>}/>
        <Route path='/about' element={<About title="About"/>}/>
        <Route path='/gallery' element={<Gallery title="Gallery"/>}/>
        <Route path='*' element={<NotFound title='404'/>}/>
      </Routes>
    </Router>
  );
}

export default App;
