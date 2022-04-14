
import './App.css';
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
   <NoteState>
    <Router>
    <Navbar/>
      
<Routes>
<Route path="/about" element={<About />}> </Route>
 <Route path="/" element={<Home />}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/signup" element={<Signup />}></Route>

  


</Routes>


    </Router>
    </NoteState>
    </>
  );
}

export default App;
