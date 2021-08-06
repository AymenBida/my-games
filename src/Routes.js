import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import App from './components/App/App';
import Signup from './components/Signup/Signup';
import './index.scss';

const Routes = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
