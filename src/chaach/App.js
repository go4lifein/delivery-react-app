import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css'; 
import './assets/fonts/fonts.css';
import Chaach from './containers/chaach';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path = "/" component = {Chaach}>

     </Route>
   
    
 </Switch>
      </Router>
    
    </div>
  );
}

export default App;
