import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css'; 
import './assets/fonts/fonts.css';
import Pouches from './containers/pouches';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path = "/" component = {Pouches}>

     </Route>
   
    
 </Switch>
      </Router>
    
    </div>
  );
}

export default App;
