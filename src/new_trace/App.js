import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Index from './containers/index';
import './assets/fonts/fonts.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
     
     <Route exact path = "/" component = {Index}>
     
     </Route>
   
 </Switch>
      </Router>
    
    </div>
  );
}

export default App;
