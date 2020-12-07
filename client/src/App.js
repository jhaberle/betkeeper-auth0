import Login from './pages/Login/login';
import Home from './pages/Home/home';
import Bets from './pages/Bets/bets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/bets" component={Bets} />
        </Switch>
      </Router>
    </>
  );
}

export default App;