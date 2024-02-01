import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
function App() {
  return (
    <Container customClass="min-height">
      <Router>
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/company">Company</Link></li>
           <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/newproject">New Project</Link></li>
        </ul>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/company" element={<Company/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/newproject" element={<NewProject/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App;