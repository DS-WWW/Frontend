import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catfeed from './pages/Catfeed';
import CatfeedDetail from './pages/CatfeedDetail';
import HospitalMap from './pages/HospitalMap';
import Catcamera from './pages/Catcamera';
import Cardnews from './pages/Cardnews';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element={<Navbar />}>
            <Route path="/" element={<Home />}/>
            <Route path="/Catfeed" element={<Catfeed />}/>
            <Route path="/HospitalMap" element={<HospitalMap />}/>
            <Route path="/Catfeed/CatfeedDetail/:name" element={<CatfeedDetail />}/>
            <Route path="/Catcamera" element={<Catcamera />}/>
            <Route path="/Cardnews" element={<Cardnews />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;