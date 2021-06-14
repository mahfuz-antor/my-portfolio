import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/AboutPage';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/projects">
         <Projects></Projects>
       </Route>
       <Route path="/blogs">
         <Blogs></Blogs>
       </Route>
       <Route path="/about">
         <AboutPage></AboutPage>
       </Route>
       <Route path="/resume">
         <Resume></Resume>
       </Route>
       <Route path="/contact">
         <Contact></Contact>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
