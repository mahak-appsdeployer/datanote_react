
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import DataState from './context/data/dataState';

function App() {
  return (

    <>
    <DataState>
    <Router>
    <Navbar/>
     
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
           <About/>
          </Route>
         
          
        </Switch>
  
    </Router> 
    </DataState> 
        </>
  );
}

export default App;
