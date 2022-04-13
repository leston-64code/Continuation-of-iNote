
import './App.css';
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
   
    <Router>
    <Navbar/>
      
<Routes>
<Route path="/about" element={<About />}> </Route>
          <Route path="/" element={<Home />}></Route>

  


</Routes>


    </Router>
    </>
  );
}

export default App;
