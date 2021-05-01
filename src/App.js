import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

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
         <About></About>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
