
import './App.css';
import './pages/Home'
import Home from './pages/Home';

import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Sign from './pages/Sign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/'>
           
        </Link>
        <Link to='/Sign'>
           
        </Link>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/Sign'>
            <Sign/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
