import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css'; 
import './assets/fonts/fonts.css';
import Dahi from './containers/dahi';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path = "/" component = {Dahi}>

     </Route>
   
    
 </Switch>
      </Router>
    
    </div>
  );
}

export default App;
