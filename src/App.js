import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
    <Router>
    <Fragment>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </div>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
