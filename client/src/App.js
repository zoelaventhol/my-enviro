// get rid of logo?
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { NavBar } from 'react-router-dom';
import FeaturedIndicatorView from './components/FeaturedIndicatorView.js';
import IconGridView from './components/IconGridView.js';
import AboutView from './components/AboutView.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>Hello there</h1>
      {/* <Routes> */}
        {/* can pass props here */}
        {/* <Route path="/" element={<HomeView />} /> */}
        {/* <Route path="/about" element={<About />} />  */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
