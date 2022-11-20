import './App.css';
import Rendering from './Components/Rendering/Rendering';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Rendering />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/:user' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
