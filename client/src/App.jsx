import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services  from './Pages/Services/Services/Services.jsx';
import Agent from './Pages/Agent/Agent';
import Properties from './Pages/Properties/Properties';
import Contact from './Pages/Contact/Contact';
import  Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';


function App() {

  return (
    <>
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Agent' element={<Agent/>}/>
          <Route path='/Properties' element={<Properties/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
