
import './App.css';
import './pages/Home'
import Home from './pages/Home';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Sign from './pages/Sign';
import store from './store';
function App() {
  return (
   <Provider store={store}>
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
   </Provider>
  );
}

export default App;
