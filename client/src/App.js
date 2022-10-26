// get rid of logo?
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FeaturedIndicator from './components/FeaturedIndicator.js';
import Form from './components/Form.js';
import IconGrid from './components/IconGrid.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* can pass props here */}
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </div>
  );
}

export default App;
