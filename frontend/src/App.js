import React   from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from "./HomeScreen";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={HomeScreen}/>
        </Switch>
      </Router>
  );
}

export default App;
