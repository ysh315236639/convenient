import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
