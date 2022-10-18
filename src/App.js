
import './App.css';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Navbar from './components/Header/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DataState from './context/data/dataState';
import Login from './components/Header/Login';
import SignUp from './components/Header/SignUp';
import {useState} from 'react'
import { Alert } from './components/Pages/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
    }
  return (
   
    <>
 
    <DataState>
    
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
     <div className="container">
    <Switch>
    <Route exact path="/">
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
           <About/>
          </Route>
          <Route exact path="/login">
           <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
           <SignUp showAlert={showAlert}/>
          </Route>
         
          
        </Switch>
        </div>
    </Router> 
    </DataState> 
        </>
  );
}

export default App;
