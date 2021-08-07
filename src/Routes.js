import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import App from './components/App/App';
import Signup from './components/Signup/Signup';
import './index.scss';
import Login from './components/Login/Login';
import Game from './components/App/components/Game/Game';

const Routes = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/games/:id" component={Game} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
